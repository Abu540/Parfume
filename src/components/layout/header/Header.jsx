import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../../assets/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className={styles.container}>
      <div className="container">
        <div className={styles.mainContainer}>
          <h1>
            <img src={logo} />
          </h1>

          <nav>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/products">
              <p>Products</p>
            </Link>
            <Link to="">
              <p>About</p>
            </Link>
            <input
              className={styles.search}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </nav>
          <div className={styles.icons}>
            <Link to="/user">
              <span>
                <FaRegUser />
              </span>
            </Link>
            <Link to="/cart">
              <span>
                <FaShoppingCart />
              </span>
            </Link>
            <Link to="/admin">
              <span>
                <FaRegCircleUser />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
