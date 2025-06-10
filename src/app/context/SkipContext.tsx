"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

interface SkipContextType {
  skips: Skip[];
  filteredSkips: Skip[];
  loading: boolean;
  error: string | null;
  selectedSkipId: number | null;
  setSelectedSkipId: (id: number | null) => void;
  handleSort: (sortType: string) => void;
  handleFilter: (filterType: string) => void;
  retryFetch: () => void;
}

const SkipContext = createContext<SkipContextType | undefined>(undefined);

export const useSkipContext = () => {
  const context = useContext(SkipContext);
  if (context === undefined) {
    throw new Error("useSkipContext must be used within a SkipProvider");
  }
  return context;
};

interface SkipProviderProps {
  children: ReactNode;
}

export const SkipProvider: React.FC<SkipProviderProps> = ({ children }) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [filteredSkips, setFilteredSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  const fetchSkips = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch skips");
      }
      const data = await response.json();
      setSkips(data);
      setFilteredSkips(data);
    } catch (err) {
      setError("Failed to load skip options");
      console.error("Error fetching skips:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkips();
  }, []);

  const handleSort = (sortType: string) => {
    let sortedSkips = [...filteredSkips];
    switch (sortType) {
      case "price-low-high":
        sortedSkips.sort((a, b) => a.price_before_vat - b.price_before_vat);
        break;
      case "price-high-low":
        sortedSkips.sort((a, b) => b.price_before_vat - a.price_before_vat);
        break;
      case "size-small-big":
        sortedSkips.sort((a, b) => a.size - b.size);
        break;
      case "size-big-small":
        sortedSkips.sort((a, b) => b.size - a.size);
        break;
      default:
        sortedSkips = [...skips];
    }
    setFilteredSkips(sortedSkips);
  };

  const handleFilter = (filterType: string) => {
    let filtered = [...skips];
    switch (filterType) {
      case "road-permit":
        filtered = filtered.filter((skip) => skip.allowed_on_road);
        break;
      case "heavy-waste":
        filtered = filtered.filter((skip) => skip.allows_heavy_waste);
        break;
      case "reset":
        filtered = [...skips];
        break;
    }
    setFilteredSkips(filtered);
  };

  const retryFetch = () => {
    fetchSkips();
  };

  const value = {
    skips,
    filteredSkips,
    loading,
    error,
    selectedSkipId,
    setSelectedSkipId,
    handleSort,
    handleFilter,
    retryFetch,
  };

  return <SkipContext.Provider value={value}>{children}</SkipContext.Provider>;
}; 