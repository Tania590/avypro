import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./Card";
import Loading from "./Loading";

const Wrapper = styled.div`
  display: grid;
  gap: 3.2rem;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    gap: 2.4rem;
  }
`;

function AvatarGallery() {
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=3")

      .then((res) => {
        const people = res.data.users.map((person) => {
          return {
            id: person.id,
            name: `${person.firstName} ${person.lastName}`,
            image: person.image,
          };
        });
        setAvatars(people);
      })
      .catch((err) => {
        console.error("Error fetching avatars", err);
        setError("Failed to load Avatars");
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;
  return (
    <Wrapper>
      {avatars.map((avatar) => (
        <Card key={avatar.id} avatar={avatar} />
      ))}
    </Wrapper>
  );
}

export default AvatarGallery;
