import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/">
        Home
      </Link>

      <Link className="nav-menu__item" to="/lenses">
        Lenses
      </Link>

      <Link className="nav-menu__item" to="/new-lens">
        Add Lens
      </Link>
    </div>
  );
};

export default Nav;
