import React from "react";

const Summary = ({ data }) => {
  return (
    <div>
      <p>Name:{data.name}</p>
      <p>Email:{data.email}</p>
      <p>Password:{data.password}</p>
      <p>Address:{data.address}</p>
      <p>City:{data.city}</p>
      <p>Country:{data.country}</p>
    </div>
  );
};

export default Summary;
