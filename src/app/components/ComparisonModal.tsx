"use client";

import React from "react";
import { ComparisonModalProps } from "../types/skip";

const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose, onConfirm, children, showConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl p-4 sm:p-8 max-w-2xl w-full relative mx-2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
        {showConfirm && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={onConfirm}
              className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-8 py-2 rounded-full shadow transition-all duration-200"
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonModal; 