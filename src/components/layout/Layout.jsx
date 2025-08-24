import React from "react";
import styles from "./layout.module.css";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContainer}>{children}</main>
    </div>
  );
};

export default Layout;
