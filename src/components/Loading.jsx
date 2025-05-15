import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 4rem;
  height: 4rem;
  border: 4px solid #3b82f6;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Loading() {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
}

export default Loading;
