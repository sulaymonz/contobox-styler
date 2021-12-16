export const stylesToCSS = (styles) => {
  const newStyles = {};

  Object.entries(styles).forEach(([elKey, elProps]) => {
    Object.entries(elProps).forEach(([pKey, p]) => {
      newStyles[elKey] = {
        ...newStyles[elKey],
        [pKey]: `${p.value}${p.unit}`,
      };
    });
  });

  return newStyles;
};
