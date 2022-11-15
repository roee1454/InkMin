import { Link } from "react-router-dom";
import "../css/NavBar.css"

export default function NavBar() {
  return (
    <nav className="nav-wrapper">
      <div className="logo-wrapper">
        <Link className="link" to="/home">
          <h1 className="logo">
            Ink<span>Mind</span>
          </h1>
        </Link>
      </div>
      <ul className="nav-list">
        <CustomLink to="/home">בית</CustomLink>
        <CustomLink to="/feed">פיד</CustomLink>
        <CustomLink to="/pircing">פירסינג</CustomLink>
      </ul>
      <div className="btn-wrapper">
        <Link to="/line-order" className="btnLink">לקביעת תור</Link>
      </div>
    </nav>
  );
}

export function CustomLink(props) {
  return (
    <li className="list-element">
      <Link className="link hover" to={props.to}>
        {props.children}
      </Link>
    </li>
  );
}
