import Header from "./components/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);

  li {
    list-style: none; /* Remove default list styling */
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
