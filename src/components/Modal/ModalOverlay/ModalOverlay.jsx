import PropTypes from 'prop-types';
import styles from "../ModalOverlay/modalOverlay.module.css"
const ModalOverlay = ({onClose}) => {
    return(<div className={styles.overlay} onClick={onClose}></div>)
    
}
export default ModalOverlay;