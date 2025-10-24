import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllFavorites, deleteFavorite } from "../services/favorites";
import bookImg from "../images/livro.png";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchAllFavorites() {
    const favoritesResult = await getAllFavorites();
    setFavorites(favoritesResult);
  }

  async function removeFavorite(id) {
    await deleteFavorite(id);
    alert(`book id ${id} removed`);
    await fetchAllFavorites();
  }

  useEffect(() => {
    fetchAllFavorites();
  }, []);

  return (
    <AppContainer>
      <div>
        <Title>Here is your favorite books</Title>
        <ResultContainer>
          {favorites.length !== 0
            ? favorites.map((favorite) => (
                <Result onClick={() => removeFavorite(favorite.id)}>
                  <p>{favorite.name}</p>
                  <img src={bookImg} />
                </Result>
              ))
            : null}
        </ResultContainer>
      </div>
    </AppContainer>
  );
}

export default Favorites;
