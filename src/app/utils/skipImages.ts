export const getSkipImage = (size: number): string => {
  const baseUrl = "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes";
  
  const imageMap: Record<number, string> = {
    4: "4-yarder-skip.jpg",
    6: "6-yarder-skip.jpg",
    8: "8-yarder-skip.jpg",
    10: "10-yarder-skip.jpg",
    12: "12-yarder-skip.jpg",
    14: "14-yarder-skip.jpg",
    16: "16-yarder-skip.jpg",
    20: "20-yarder-skip.jpg",
    40: "40-yarder-skip.jpg",
  };

  return `${baseUrl}/${imageMap[size]}`;
}; 