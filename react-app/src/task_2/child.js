import React from "react";

const Child = ({ title, image, children }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Child;
