import styled from "styled-components";

const StyledSection = styled.section`
  padding: 3.2rem 0 8rem;
  @media (min-width: 768px) {
    padding: 6.4rem 0;
  }
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export default Section;
