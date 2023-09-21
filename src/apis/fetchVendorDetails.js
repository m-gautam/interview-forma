const FETCH_VENDORS_URL = "http://localhost:3000/vendors/:id";

export const fetchVendorDetails = async (vendorId) => {
  const res = await fetch(FETCH_VENDORS_URL.replace(/:id/i, vendorId));
  const vendors = await res.json();

  return vendors;
};
