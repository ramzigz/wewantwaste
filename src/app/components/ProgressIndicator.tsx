"use client";

import React from "react";
import {
  MapPinIcon,
  TrashIcon,
  TruckIcon,
  ShieldCheckIcon,
  CalendarDaysIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const steps = [
  { id: 1, label: "Postcode", icon: MapPinIcon },
  { id: 2, label: "Waste Type", icon: TrashIcon },
  { id: 3, label: "Select Skip", icon: TruckIcon },
  { id: 4, label: "Permit Check", icon: ShieldCheckIcon },
  { id: 5, label: "Choose Date", icon: CalendarDaysIcon },
  { id: 6, label: "Payment", icon: CreditCardIcon },
];

const activeStep = 3; // 1-based index for "Select Skip"

const ProgressIndicator = () => {
  return (
    <div className="w-full py-6 mb-8 border-b border-gray-800 bg-transparent">
      <div className="max-w-7xl px-0 mx-auto sm:px-4 lg:px-8">
        <div className="overflow-x-auto max-w-full sm:overflow-x-visible">
          <div className="flex items-center gap-0 w-max sm:w-full sm:justify-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index + 1 === activeStep;
              const isCompleted = index + 1 < activeStep;
              const colorClass = isActive || isCompleted ? "text-violet-500" : "text-gray-500";
              const labelClass = isActive || isCompleted ? "text-violet-500 font-semibold" : "text-gray-500 font-normal";
              const lineClass = isCompleted ? "bg-violet-500" : "bg-gray-700";
              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center min-w-[80px]">
                    <Icon className={`${isActive ? "w-8 h-8" : "w-6 h-6"} mb-1 ${colorClass} ${isActive ? "font-bold" : ""}`} />
                    <span className={`text-xs ${labelClass} ${isActive ? "text-base font-bold" : ""}`}>{step.label}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-2 self-center rounded-full ${lineClass}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator; 