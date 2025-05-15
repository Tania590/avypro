import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background-color: #3b82f6;
  color: #fff;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #629bf8;
  }
`;

function FloatingButton({ onClick }) {
  return <Button onClick={onClick}>Create New Avatar</Button>;
}

export default FloatingButton;
