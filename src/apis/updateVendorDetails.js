const FETCH_VENDORS_URL = "http://localhost:3000/vendors/:id";

export const updateVendorDetails = async (vendorId, vendorDetails) => {
  const res = await fetch(FETCH_VENDORS_URL.replace(/:id/i, vendorId), {
    method: "PUT",
    body: JSON.stringify(vendorDetails),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const vendors = await res.json();

  return vendors;
};
