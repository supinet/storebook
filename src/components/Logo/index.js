import logo from "../../images/logo.svg";
import "./style.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} className="logo-img" alt="logo" />
      <p>
        <strong>book</strong>Store
      </p>
    </div>
  );
}
