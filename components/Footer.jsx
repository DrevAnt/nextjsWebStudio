import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Your Brand Name</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" className={styles.link} passHref>
            <div>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image src={"/img/link.png"} width="40px" height="40px" alt="" />
            </div>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Your Address,
          <br /> World
        </div>
        <div className={styles.cardItem}>
          fake@gmail.com
          <br /> 111-222-3333
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          © 2022,
          <br />
          All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
