import React, { useState, useEffect } from "react";
import ModalContactForm from "./components/ModalContactForm";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Modal } from "rsuite";
import FixButtons from "./components/FixButtons";
import { HelmetProvider } from "react-helmet-async";
function Root() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal...");
    setIsModalOpen(true);
    setOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const handleButton = () => {
  //   setIsModalOpen(true);
  // }
  useEffect(() => {
    const delay = setTimeout(() => {
      openModal(); // Open the modal after 2 seconds
    }, 5000);

    return () => clearTimeout(delay); // Cleanup function to clear the timeout on unmount
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        size={"md"}
        className="modal-parent"
      >
        <Modal.Header>
          <Modal.Title className="title-rj">Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalContactForm />
        </Modal.Body>
      </Modal>
      <HelmetProvider>
        <Header />
        <FixButtons openModal={openModal} />
        <Outlet />
        <Footer />
      </HelmetProvider>
      {/* <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <ModalContactForm closeModal={closeModal} />} */}
    </>
  );
}

export default Root;
