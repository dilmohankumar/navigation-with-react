import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contacts = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleContactClick = () => {
    setModalVisible(true);
  };

  return (
    <div >
      {modalVisible && <Modal onClose={handleCloseModal} />}
      <div className="ui raised very padded text container segment" style={{marginTop:"100px",backgroundColor:"lightgreen"}}>
        <Link to="/card/Reat-route completed" className="ui header" onClick={handleContactClick}>react-route
        </Link>
        <p>React route succesful</p>
      </div>
      <div className="ui raised very padded text container segment" style={{marginTop:"100px",backgroundColor:"lightgreen"}}>
        <Link to="/card/Reat-route completed" className="ui header" onClick={handleContactClick}>react-route-2</Link>
        <p>React route succsfull created-2</p>
      </div>
    </div>
  );
};

export default Contacts;

