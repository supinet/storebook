import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.ul`
  display: flex; /* Horizontal layout */
`;

const MenuItem = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  text-align: center; /* Center text horizontally */
  height: 100%; /* Full height of the parent */
  padding: 0 5px; /* Horizontal padding */
  cursor: pointer; /* Pointer cursor on hover */
  min-width: 120px; /* Minimum width for each menu option */
`;

const menuItems = ["CATEGORIES", "LIB", "FAVORITES", "ABOUT"];

export default function HeaderOptions() {
  return (
    <MenuContainer>
      {menuItems.map((item) => (
        <MenuItem key={item}>
          <Link to={`/${item.toLowerCase()}`}>
            <p>{item}</p>
          </Link>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}
