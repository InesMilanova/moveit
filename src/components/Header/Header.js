import { useNavigate } from "react-router-dom";
import "./Header.scss";

export function Header() {
  let navigate = useNavigate();

  return (
    <div className="header" onClick={() => navigate("/")}>
      Home
    </div>
  );
}
