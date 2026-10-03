export const capitalize = (city) => {
  const normalizedCity = city?.trim();
  if (!normalizedCity) {
    return '';
  }

  return normalizedCity.at(0).toUpperCase() + normalizedCity.slice(1);
};
