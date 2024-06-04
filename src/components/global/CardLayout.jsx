import React from "react";

const CardLayout = ({ children, className }) => {
  return (
    <div className={`h-auto  overflow-hidden mx-4 rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

export default CardLayout;
