export const separete_page = (items, max, index = 1) => {
  const data = items.reduce((accumulator, item, index) => {
    const page = Math.floor(index / max);
    accumulator[page] = [...(accumulator[page] || []), item];
    return accumulator;
  }, []);
  return {
    films: data[index - 1],
    pages: data.length,
    indexPage: index,
  };
};
