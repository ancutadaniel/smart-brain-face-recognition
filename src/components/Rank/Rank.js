import React from "react";

export const Rank = ({ user }) => {
  const { name, entries } = user;
  return (
    <div>
      <h1 className="white f3">Welcome {name}</h1>
      <div className="white f3">{`your rank is... #${entries}`}</div>
    </div>
  );
};
