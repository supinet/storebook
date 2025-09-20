import "./styles.css";

import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";

const icons = [perfil, sacola];

export default function HeaderIcons() {
  return (
    <ul className="icon-list">
      {icons.map((icon) => (
        <li className="icon-item">
          <img src={icon} alt="menu icon"></img>
        </li>
      ))}
    </ul>
  );
}
