import React from "react";
import jdmlegendsImage from "../../assets/jdmlegends.jpg";
import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>JDM Tire Store</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={jdmlegendsImage} alt="Японські шини" />
      </div>
    </React.Fragment>
  );
};

export default Header;
