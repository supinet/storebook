import Header from "./components/Header";
import styled from "styled-components";
import Search from "./components/Search";
import News from "./components/News";

const AppContainer = styled.div`
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <News />
    </AppContainer>
  );
}

export default App;
