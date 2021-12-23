import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
import Link from "next/link";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#boff49" top="-45vh" left="-45vh" />

      <div className={styles.card}>
        <h1 className={styles.title}>
          Hello, I'm <br />
          <span className={styles.brandName}>Your Brand </span>
        </h1>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <Link href="/contact" passHref>
          <button className={styles.button}>Contact Us</button>
        </Link>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/prog.png"
          layout="fill"
          objectFit="cover"
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Intro;
