import styles from "../styles/Testimonials.module.css";
import Image from "next/image";
import Circle from "./Circle";
import { users } from "../data";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle top="-70vh" backgroundColor="darkblue" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div className={styles.card} key={user.id}>
            <Image src={`/img/${user.logo}`} width="30" height="30" alt="" />
            <p className={styles.comment}>&ldquo;{user.comment}&rdquo;</p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                src={`/img/${user.avatar}`}
                width="45"
                height="45"
                objectFit="cover"
                alt=""
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
