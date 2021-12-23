import Head from "next/head";
import { data } from "../data";
import styles from "../styles/Home.module.css";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs website</title>
        <meta name="description" content="Nextjs website" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
