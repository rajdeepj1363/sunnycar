import React from "react";
import headerBannerImg from "../../images/header_banner.png";
import styles from "./headerBanner.module.css";
import HeaderBannerModal from "./HeaderBannerModal";

function HeaderBanner() {
  return (
    <>
      <header className={styles.banner}>
        <HeaderBannerModal />
      </header>
    </>
  );
}

export default HeaderBanner;
