import { useState } from "react";

import GlobalStyle from "./styles/GlobalStyle";

import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import AvatarGallery from "./components/AvatarGallery";
import FloatingButton from "./components/FloatingButton";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main>
          <Section>
            <AvatarGallery />
          </Section>
        </Main>
      </Container>
      <FloatingButton onClick={() => setIsModalOpen(true)} />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default App;
