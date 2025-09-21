import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} className="logo-img" alt="logo" />
      <p>
        <strong>book</strong>Store
      </p>
    </LogoContainer>
  );
}
