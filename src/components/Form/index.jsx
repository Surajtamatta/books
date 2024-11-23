
"use client";

import { useEffect } from "react";

const FlodeskForm = () => {
  useEffect(() => {
    // Check if the Flodesk library is already initialized
    if (!window.fd) {
      console.warn("Flodesk library not loaded yet. Make sure the script is included.");
      return;
    }

    // Initialize the Flodesk form in the specified container
    window.fd("form", {
      formId: "656c1593717e716ed03eba7c",
      containerEl: "#fd-container", // Use the existing div
    });
  }, []);

  return (
    <div className="w-full">
      <div id="fd-container "></div>
    </div>
  );
};

export default FlodeskForm;
