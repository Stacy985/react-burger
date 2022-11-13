import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Modal/modal.module.css";
import ModalOverlay from "../Modal/ModalOverlay/ModalOverlay";
import ReactDOM from "react-dom";

const popup = document.querySelector("#modal");

const Modal = ({ closePopup }) => {
  const handleEscKeydown = (evt) => {
    evt.key === "Escape" && closePopup();
  };
  return ReactDOM.createPortal(
    <div>
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.modal__closeButton}
          onClick={closePopup}
        >
          <CloseIcon type="primary" />
        </button>
      </div>
      <ModalOverlay closePopup={closePopup} />
    </div>,
    popup
  );
};

Modal.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default Modal;
