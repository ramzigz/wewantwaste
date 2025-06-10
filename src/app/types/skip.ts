export type Skip = {
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
};

export type SkipCardProps = {
  skip: Skip;
  isSelected: boolean;
  onClick: (id: number) => void;
};

export type ComparisonToolProps = {
  skips: Skip[];
  selectedSkipId: number | null;
  onSelect: (id: number) => void;
};

export type ComparisonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  children: React.ReactNode;
  showConfirm?: boolean;
};

export type FilterBarProps = {
  onSortChange: (value: string) => void;
  activeSort?: string;
};
