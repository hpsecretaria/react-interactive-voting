import React from "react";

import styles from "./Header.module.css";

function Header(): React.ReactElement {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.header}>Online Votes</h1>
    </header>
  );
}

export default Header;
