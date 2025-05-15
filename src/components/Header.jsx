import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  padding: 3.2rem 1.6rem;
  margin-bottom: 6.4rem;
  @media (min-width: 768px) {
    padding: 4rem 2rem;
    margin-bottom: 9.6rem;
  }

  p {
    margin-top: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: #555;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Welcome to AvyPro — where your avatars come to life</h1>
      <p>Your avatar journey starts here, Tania.</p>
    </StyledHeader>
  );
}

export default Header;
