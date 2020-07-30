import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <p className=" f2">{`${name}, your current rank is...`}</p>
      <p className=" f2">{entries}</p>
    </div>
  );
};
export default Rank;
