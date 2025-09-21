import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const Icon = styled.li`
  margin-right: 40px; /* Space between icons */
  width: 25px;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

const icons = [perfil, sacola];

export default function HeaderIcons() {
  return (
    <Icons>
      {icons.map((icon) => (
        <Icon>
          <img src={icon} alt="menu icon"></img>
        </Icon>
      ))}
    </Icons>
  );
}
