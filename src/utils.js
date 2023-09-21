export const sortVendorsList = (arr, order = "asc") => {
  return arr.sort((a, b) => {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if (order === "asc") {
      return aName.localeCompare(bName);
    } else {
      return bName.localeCompare(aName);
    }
  });
};

export const filterList = (arr, search) => {
  if (search === "all") {
    return arr;
  }
  const res = arr.filter((item) => item.name === search);
  return res;
};
