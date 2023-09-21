const FETCH_VENDORS_URL = "http://localhost:3000/vendors";

export const fetchVendorsList = async () => {
  const res = await fetch(FETCH_VENDORS_URL);
  const vendors = await res.json();

  return vendors;
};
