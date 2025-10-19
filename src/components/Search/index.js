import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../services/livros";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

export default function Search() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [books, setBooks] = useState([]);

  //get books before page load
  useEffect(() => {
    fetchAllBooks();
  }, []);

  async function fetchAllBooks() {
    const booksResult = await getAllBooks();
    setBooks(booksResult);
  }

  return (
    <SearchContainer>
      <Title>Start here</Title>
      <Subtitle>Search here</Subtitle>
      <Input
        placeholder="Search for books"
        onBlur={(event) => {
          const textTyped = event.target.value;
          const resultSearch = books.filter((book) =>
            book.name.toLowerCase().includes(textTyped.toLowerCase())
          );
          setSearchedBooks(resultSearch);
        }}
      />
      {searchedBooks.map((book) => (
        <Result key={book.id}>
          <p>
            <strong>{book.name}</strong>
          </p>
          <img src={book.src} />
        </Result>
      ))}
    </SearchContainer>
  );
}
