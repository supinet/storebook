import { books } from "./NewsData";
import styled from "styled-components";
import { Title } from "../BooksTitle";
import BookCardIndication from "../BookCardIndication";
import bookImg from "../../images/livro2.png";

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
      <BookCardIndication
        title="Maybe you will like this"
        subtitle="Angular 11"
        description="Learn about angular 11 components, templates, and more."
        img={bookImg} alt="angular 11"
      />
       <BookCardIndication
        title="Maybe you will like this"
        subtitle="NodeJS"
        description="Learn about NodeJS components, templates, and more."
        img={bookImg} alt="nodeJs"
      />
    </NewsContainer>
  );
}
