import React, { useRef } from "react";
import "./modal.css";
import { useClickOutside } from "../../hooks/useClickOutside";

const Modal = ({ isOpen, closeModal }) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, closeModal);
  if (!isOpen) {
    return null;
  }
  return (
    <div ref={modalRef} className="modal-container">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
      </p>
      <button onClick={closeModal}>close</button>
    </div>
  );
};

export default Modal;
