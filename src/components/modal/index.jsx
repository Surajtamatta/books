import React from "react";
import { useModal } from "../../context/modalContext";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { isOpen, closeModal, content } = useModal();

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="close-modal absolute z-50 top-4 right-4 text-1xl text-gray-500 hover:text-black"
        >
            <FaTimes/>
          
        </button>

        {/* Dynamic Content */}
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
