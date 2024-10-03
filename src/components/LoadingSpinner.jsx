import React from "react";
import "../styles/LoadingSpinner.css"; // Make sure to create this CSS file

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
