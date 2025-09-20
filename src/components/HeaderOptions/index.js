import "./styles.css";

const menuItems = ["CATEGORIES", "MY LIB", "FAVORITE", "ABOUT"];

export default function HeaderOptions() {
  return (
    <ul className="menu-list">
      {menuItems.map((item) => (
        <li className="menu-item">
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}
