"use client";

import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import SkipCard from "./SkipCard";
import SkipCardSkeleton from "./SkipCardSkeleton";
import ComparisonTool from "./ComparisonTool";
import FilterBar from "./FilterBar";
import { useSkipContext } from "../context/SkipContext";
import ComparisonModal from "./ComparisonModal";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

const SkipHirePage: React.FC = () => {
  const {
    filteredSkips,
    loading,
    error,
    selectedSkipId,
    setSelectedSkipId,
    handleSort,
    retryFetch,
  } = useSkipContext();

  const [isComparisonOpen, setComparisonOpen] = React.useState(false);
  const [activeSort, setActiveSort] = React.useState("default");

  const handleProceed = () => {
    if (selectedSkipId) {
      // Handle proceeding with the selected skip
      console.log("Proceeding with skip:", selectedSkipId);
    }
  };

  const handleSortChange = (value: string) => {
    setActiveSort(value);
    handleSort(value);
  };

  const selectedSkip = selectedSkipId ? filteredSkips.find(s => s.id === selectedSkipId) : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          <ProgressIndicator />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <SkipCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Error</h2>
          <p className="text-gray-400 mb-6 text-lg">We couldn&apos;t load the skip options. Please try again.</p>
          <button
            onClick={retryFetch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 pb-32">
      <div className="max-w-7xl mx-auto">
        <ProgressIndicator />
        
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Choose Your Skip</h1>
          <p className="text-gray-400 mb-6">
            Select the skip size that best fits your needs. All prices include VAT and delivery.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 w-full justify-between">
              <FilterBar
                onSortChange={handleSortChange}
                activeSort={activeSort}
              />
              <button
                onClick={() => setComparisonOpen(true)}
                className="hidden sm:flex items-center gap-2 border border-violet-700 text-violet-400 bg-transparent font-semibold px-8 py-2 rounded-full shadow-none transition-all duration-200 text-sm h-[40px] min-w-[200px] justify-center whitespace-nowrap cursor-pointer"
              >
                <ArrowsRightLeftIcon className="w-5 h-5" />
                Compare Skips
              </button>
            </div>
            <div className={`mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${selectedSkipId ? 'pb-[88px] sm:pb-[104px]' : 'pb-2'}`}>
              {filteredSkips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSkipId === skip.id}
                  onClick={setSelectedSkipId}
                />
              ))}
            </div>
          </div>
        </div>
        
        {selectedSkipId && selectedSkip && (
          <div className="fixed bottom-0 left-0 w-full z-40 bg-gradient-to-r from-gray-900/95 to-black/95 border-t border-gray-800 px-2 sm:px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-2xl gap-2 sm:gap-0">
            <div className="flex flex-col items-start max-w-full sm:max-w-[60%]">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-1">
                <span className="text-base sm:text-lg font-bold text-white">{selectedSkip.size} Yard</span>
                <span className="text-xs sm:text-sm text-gray-300">{selectedSkip.hire_period_days} day hire period</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-violet-400">£{selectedSkip.price_before_vat}</span>
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 mt-1 leading-snug max-w-xs sm:max-w-full">
                Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
              </div>
            </div>
            <button
              onClick={handleProceed}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-base sm:text-lg shadow-lg w-full sm:w-auto"
            >
              Continue to Delivery Details
            </button>
          </div>
        )}
      </div>
      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setComparisonOpen(false)}
        onConfirm={() => setComparisonOpen(false)}
        showConfirm={!!selectedSkipId}
      >
        <ComparisonTool
          skips={filteredSkips}
          selectedSkipId={selectedSkipId}
          onSelect={setSelectedSkipId}
        />
      </ComparisonModal>
    </div>
  );
};

export default SkipHirePage; 