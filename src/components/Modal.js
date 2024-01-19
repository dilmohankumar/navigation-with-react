import React from "react";
import ReactDOM from "react-dom";

const Modal = ({onClose}) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer show modals visible active">
      <div className="ui raised very padded text container segment"style={{backgroundColor:"lightgreen"}}>
        <button className="ui button" onClick={onClose} style={{float:"right",backgroundColor:"lightblue"}}>Close</button>
        React portal succesfully created.
      </div>
    </div>,
    document.getElementById("Modal")
  );
};

export default Modal;
