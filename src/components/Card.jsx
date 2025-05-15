import styled from "styled-components";

const StyledCard = styled.article`
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`;

const AvatarImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const Name = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Button = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: ${({ isHovered }) => (isHovered ? "#629bf8" : "#3B82F6")};
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  &:hover {
    background-color: #629bf8;
  }
`;

function Card({ avatar }) {
  return (
    <StyledCard>
      <AvatarImage src={avatar.image} alt={avatar.name} />
      <Name>{avatar.name}</Name>

      <Button>Edit</Button>
    </StyledCard>
  );
}

export default Card;
