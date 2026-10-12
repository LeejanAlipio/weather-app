export const capitalize = (city) => {
  if (typeof city !== 'string') return '';
  
  const normalizedCity = city?.trim();
  if (!normalizedCity) {
    return '';
  }

  return normalizedCity.at(0).toUpperCase() + normalizedCity.slice(1);
};
