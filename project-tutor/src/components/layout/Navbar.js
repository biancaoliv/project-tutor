import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../img/logo-videoo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="tutor" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/add">Add Tutorial</Link>
          </li>
          <li className={styles.item}>
            <Link to="/tutorials">Tutorials</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
