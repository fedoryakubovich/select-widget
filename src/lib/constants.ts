export const ITEMS_COUNT = 10000;

export const ITEMS = Array.from({ length: ITEMS_COUNT }, (_, i) => ({
  id: `${i + 1}`,
  label: `Element ${i + 1}`,
}));

export const FILTERS = [
  { label: "No filter", value: 0 },
  { label: ">10", value: 10 },
  { label: ">100", value: 100 },
  { label: ">200", value: 200 },
];
