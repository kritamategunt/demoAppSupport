import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Kritamate. All rights reserved.</div>
    </div>
  );
};

export default Footer;
