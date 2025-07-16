export const getFilterValues = (
  category?: string,
  city?: string,
  priceFrom?: string,
  priceTo?: string,
) => ({
  category: category ?? '',
  city: city ?? '',
  priceFrom: priceFrom ?? '',
  priceTo: priceTo ?? '',
});
