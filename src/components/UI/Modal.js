import React from 'react';
import ReactDOM from 'react-dom';

// Style
import classes from './Modal.module.css';

// Components
const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onHideCart}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalEl
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
