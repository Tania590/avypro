import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 4rem 3rem;
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  z-index: 20;
  max-width: 90%;
  width: 40rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
`;

function Modal({ onClose }) {
  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalBox>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Create New Avatar</h2>
        <p>This is just UI - no content yet. can have Form or inputs.</p>
      </ModalBox>
    </>
  );
}

export default Modal;
