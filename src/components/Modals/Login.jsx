/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "../Icons/CloseIcon";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

export default function Login({ showModal, handleClose }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    console.log("Logged in with email:", email);

    handleClose();
  };
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <button onClick={handleClose} className="close-btn">
        <CloseIcon />
      </button>
      <h2>Login</h2>
      <form>
        <label>Email address</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </Modal>
  );
}
