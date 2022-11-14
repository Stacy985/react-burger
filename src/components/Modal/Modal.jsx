import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Modal/modal.module.css";
import ModalOverlay from "../Modal/ModalOverlay/ModalOverlay";

const popup = document.querySelector("#modal");

const Modal = ({ closePopup, children }) => {
  const handleEscKeydown = (evt) => {
    evt.key === "Escape" && closePopup();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKeydown);

    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, [closePopup]);

  return createPortal(
    <div>
      <div className={styles.modal}>
        {children}
        <button
          type="button"
          /* className={styles.modal__closeButton} */
          onClick={closePopup}
        >
          <CloseIcon type="primary" onClick={closePopup}/>
        </button>
      </div>
      <ModalOverlay closePopup={closePopup} />
    </div>,
    popup
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default Modal;
