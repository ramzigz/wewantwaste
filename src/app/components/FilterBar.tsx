"use client";

import React, { useState, useRef, useEffect } from "react";
import { AdjustmentsHorizontalIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { FilterBarProps } from "../types/skip";

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "size-small-big", label: "Size: Smallest to Biggest" },
  { value: "size-big-small", label: "Size: Biggest to Smallest" },
];

const FilterBar: React.FC<FilterBarProps> = ({ onSortChange, activeSort = "default" }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = sortOptions.find((o) => o.value === activeSort) || sortOptions[0];

  return (
    <div className="flex items-center gap-4 w-full">
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className="flex items-center gap-2 bg-gray-900 border border-violet-700 text-violet-400 rounded-full px-6 py-2 shadow-sm font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 min-w-[140px] cursor-pointer"
          onClick={() => setOpen((v) => !v)}
        >
          <AdjustmentsHorizontalIcon className="w-5 h-5 text-violet-400" />
          <span>{selectedOption.label}</span>
          <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
        </button>
        {open && (
          <div className="absolute left-0 mt-2 w-full bg-gray-900 border border-violet-700 rounded-xl shadow-lg z-10 overflow-hidden">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`w-full text-left px-5 py-2 text-sm font-medium transition-colors duration-150
                  ${option.value === activeSort ? "bg-violet-900 text-violet-400" : "hover:bg-gray-800 text-gray-200"}
                `}
                onClick={() => {
                  setOpen(false);
                  onSortChange(option.value);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar; 