"use client";

import React, { useState } from "react";
import { getSkipImage } from "../utils/skipImages";
import { SkipCardProps } from "../types/skip";

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onClick }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleClick = () => {
    onClick(skip.id);
  };

  const getDescription = () => {
    const sizeCategory = skip.size < 8 ? 'small' : skip.size < 12 ? 'medium' : 'large';
    const wasteType = skip.allows_heavy_waste ? 'Can handle heavy waste.' : 'Suitable for light waste only.';
    const placement = skip.allowed_on_road ? 'Can be placed on the road.' : 'Must be placed on private property.';
    return `Perfect for ${sizeCategory} projects. ${wasteType} ${placement}`;
  };

  return (
    <div
      className={`
        group relative bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/80
        backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden
        transition-all duration-500 ease-out cursor-pointer
        border border-gray-700/30 hover:border-blue-500/50
        ${isSelected 
          ? "border-4 border-violet-600 scale-105 shadow-violet-600/25 ring-2 ring-violet-500/30" 
          : "hover:scale-[1.03] hover:shadow-xl"
        }
        min-h-[380px] flex flex-col
      `}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`Select ${skip.size} Yard Skip`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
        {isImageLoading && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={getSkipImage(skip.size)}
          alt={`${skip.size} Yard Skip`}
          className={`
            w-full h-full object-cover transition-opacity duration-700
            ${isImageLoading ? 'opacity-0' : 'opacity-100'}
          `}
          onLoad={() => setIsImageLoading(false)}
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <span className="bg-blue-500/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {skip.size} Yard
          </span>
          {skip.allows_heavy_waste && (
            <span className="bg-green-500/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              Heavy Waste
            </span>
          )}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {skip.size} Yard Skip
          </h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              £{skip.price_before_vat}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 items-center mb-2">
          <span className="flex items-center gap-1 text-xs text-gray-400 col-span-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 001.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            {skip.hire_period_days} day hire period
          </span>
          <span className="text-xs text-gray-400 text-right col-span-1 -mt-8">inc. VAT</span>
        </div>
        
        <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-1 group-hover:text-gray-200 transition-colors duration-300">
          {getDescription()}
        </p>
        
        {/* Features */}
        <div className="space-y-3 mb-4">
          {/* Enhanced Restrictions */}
          <div className="flex flex-wrap gap-2 justify-center">
            {skip.allowed_on_road === false && (
              <span className="flex items-center gap-1 text-yellow-400 text-xs bg-yellow-500/20 hover:bg-yellow-500/30 px-3 py-1.5 rounded-full border border-yellow-500/30 transition-all duration-300">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M10.29 3.86c.89-1.54 3.11-1.54 4 0l8.36 14.44c.89 1.53-.22 3.44-2 3.44H3.93c-1.78 0-2.89-1.91-2-3.44L10.29 3.86zM11 9a1 1 0 102 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 001.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                No Road Permit
              </span>
            )}
            {skip.allows_heavy_waste === false && (
              <span className="flex items-center gap-1 text-red-400 text-xs bg-red-500/20 hover:bg-red-500/30 px-3 py-1.5 rounded-full border border-red-500/30 transition-all duration-300">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 3a1 1 0 00-1 1v1H5a1 1 0 000 2h14a1 1 0 100-2h-3V4a1 1 0 00-1-1H9zM6 8v11a2 2 0 002 2h8a2 2 0 002-2V8H6zm3 2a1 1 0 012 0v7a1 1 0 11-2 0v-7zm4 0a1 1 0 112 0v7a1 1 0 11-2 0v-7z" />
                </svg>
                No Heavy Waste
              </span>
            )}
            {skip.allowed_on_road && (
              <span className="flex items-center gap-1 text-green-400 text-xs bg-green-500/20 hover:bg-green-500/30 px-3 py-1.5 rounded-full border border-green-500/30 transition-all duration-300">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Road Permit OK
              </span>
            )}
          </div>
        </div>
        
        {/* Enhanced Select Button */}
        <button
          className={`
            w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300
            transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
            ${isSelected 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/40 focus:ring-blue-400' 
              : 'bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 hover:from-gray-600 hover:to-gray-500 hover:text-white focus:ring-gray-400'
            }
          `}
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          {isSelected ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Selected
            </span>
          ) : 'Select This Skip'}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;