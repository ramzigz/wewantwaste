"use client";

import React from "react";

const SkipCardSkeleton = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image section */}
      <div className="relative h-48 bg-gray-700/50 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
      </div>
      
      {/* Content section */}
      <div className="p-6 relative">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-700/50 rounded-lg w-3/4 mb-4 animate-pulse"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-700/50 rounded-lg w-full animate-pulse"></div>
          <div className="h-4 bg-gray-700/50 rounded-lg w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-700/50 rounded-lg w-4/6 animate-pulse"></div>
        </div>
        
        {/* Features skeleton */}
        <div className="mt-6 space-y-2">
          <div className="h-4 bg-gray-700/50 rounded-lg w-1/2 animate-pulse"></div>
          <div className="h-4 bg-gray-700/50 rounded-lg w-2/3 animate-pulse"></div>
        </div>
        
        {/* Price skeleton */}
        <div className="mt-6 h-8 bg-gray-700/50 rounded-lg w-1/3 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkipCardSkeleton; 