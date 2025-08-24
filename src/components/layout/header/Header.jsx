import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className="container">
        <div className={styles.mainContainer}>
          <h1>Logo</h1>
          <nav>
            <Link>
              <p>Home</p>
            </Link>{" "}
            <Link>
              <p>Products</p>
            </Link>{" "}
            <Link>
              <p>About</p>
            </Link>
          </nav>
          <div className={styles.icons}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
