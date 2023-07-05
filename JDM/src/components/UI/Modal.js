import styles from "./Modal.module.css";
import React from "react";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onHideCart={props.onHideCart}/>
      <ModalWindow>{props.children}</ModalWindow>
    </React.Fragment>
  );
};

export default Modal;
