"use client";

import React from "react";
import { ComparisonToolProps } from "../types/skip";

const ComparisonTool: React.FC<ComparisonToolProps> = ({
  skips,
  selectedSkipId,
  onSelect,
}) => {
  if (skips.length === 0) return null;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">Compare Skips</h3>
      </div>

      {/* Mobile stacked cards */}
      <div className="block md:hidden space-y-4">
        {skips.map((skip) => {
          const isSelected = skip.id === selectedSkipId;
          return (
            <div
              key={skip.id}
              className={`rounded-xl p-4 border ${isSelected ? 'bg-violet-900/60 border-violet-700' : 'bg-gray-900/80 border-gray-700'} flex flex-col gap-2`}
              onClick={!isSelected ? () => onSelect(skip.id) : undefined}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-lg">{skip.size} Yard</span>
                <span className="font-bold text-violet-400 text-lg">£{skip.price_before_vat}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>{skip.hire_period_days} day hire period</span>
                <span>inc. VAT</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className={skip.allowed_on_road ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                  {skip.allowed_on_road ? '✓ Road Permit' : '✗ No Road Permit'}
                </span>
                <span className={skip.allows_heavy_waste ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                  {skip.allows_heavy_waste ? '✓ Heavy Waste' : '✗ No Heavy Waste'}
                </span>
              </div>
              <div className="mt-2">
                {isSelected ? (
                  <span className="inline-block w-full py-2 rounded-lg bg-violet-700 text-white font-semibold text-center">Selected</span>
                ) : (
                  <button
                    onClick={() => onSelect(skip.id)}
                    className="w-full py-2 rounded-lg bg-violet-800 text-violet-200 font-semibold hover:bg-violet-700 hover:text-white transition-colors duration-200"
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="pb-3 text-violet-500">Size</th>
              <th className="pb-3 text-violet-500">Price</th>
              <th className="pb-3 text-violet-500">Road Permit</th>
              <th className="pb-3 text-violet-500">Heavy Waste</th>
              <th className="pb-3 text-violet-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {skips.map((skip) => {
              const isSelected = skip.id === selectedSkipId;
              return (
                <tr
                  key={skip.id}
                  className={
                    isSelected
                      ? "bg-violet-900/60"
                      : "cursor-pointer hover:bg-gray-700/20 transition-colors duration-200"
                  }
                  onClick={!isSelected ? () => onSelect(skip.id) : undefined}
                >
                  <td className="py-3 px-4 font-medium">{skip.size} Yard</td>
                  <td className="py-3 px-4">{skip.price_before_vat}</td>
                  <td className="py-3 px-4">
                    {skip.allowed_on_road ? (
                      <span className="text-green-400 font-bold">✓</span>
                    ) : (
                      <span className="text-red-400 font-bold">✗</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {skip.allows_heavy_waste ? (
                      <span className="text-green-400 font-bold">✓</span>
                    ) : (
                      <span className="text-red-400 font-bold">✗</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {isSelected ? (
                      <span>&nbsp;</span>
                    ) : (
                      <button
                        onClick={() => onSelect(skip.id)}
                        className="text-violet-400 hover:underline font-semibold transition-colors duration-200"
                      >
                        Select
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTool;