import { books } from "./NewsData";
import styled from "styled-components";
import { Title } from "../BooksTitle";

const NewsContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewNewsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export default function News() {
  return (
    <NewsContainer>
      <Title color="#eb9b00" fontSize="36px">
        News
      </Title>
      <NewNewsContainer>
        {books.map((book) => (
          <img src={book.src} alt={book.name} key={book.id} />
        ))}
      </NewNewsContainer>
    </NewsContainer>
  );
}
