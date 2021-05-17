import React from "react";

function Wrapper({ children }) {
  return (
    <div className="wrapper bg-dark">
      {children}
    </div>
  );
}

export default Wrapper;
