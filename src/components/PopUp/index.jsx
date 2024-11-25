
"use client"

import { useEffect } from "react";

const PopUp = ({ onClose }) => {

  useEffect(() => {
        if (!window.fd) {
          console.warn("Flodesk library not loaded yet. Ensure the script is included.");
          return;
        }
  
        window.fd("popup", {
          formId: "67420de52329b983f3710813",
          containerEl: "#fd-form-67420de52329b983f3710813",
        });
   
  }, []);



  return (
    <div className="w-full">
      <div id="fd-form-67420de52329b983f3710813" className="z-50"></div>
    </div>
  );
};

export default PopUp;

