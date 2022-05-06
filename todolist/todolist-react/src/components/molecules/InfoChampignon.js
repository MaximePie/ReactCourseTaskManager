import React from "react";
import Modal from "react-modal";

export default function InfoChampignon(props) {
  console.log(props);
  return (
    <>
      <Modal isOpen={props.chien}>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <button onClick={close}>
          Fermer la modalito
        </button>
      </Modal>
    </>
  )

  function close() {
    props.fermer();
  }
}