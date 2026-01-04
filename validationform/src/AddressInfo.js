import React from "react";

function AddressInfo({ data, errors, handleChange }) {
  return (
    <div>
      <h2>Address Info</h2>
      <div>
        <label>Address:</label>
        <input name="address" value={data.address} onChange={handleChange} />
        {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
      </div>
      <div>
        <label>City:</label>
        <input name="city" value={data.city} onChange={handleChange} />
        {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
      </div>
      <div>
        <label>Country:</label>
        <input name="country" value={data.country} onChange={handleChange} />
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
      </div>
    </div>
  );
}

export default AddressInfo;
