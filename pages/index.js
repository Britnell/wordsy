import Head from "next/head";
import App from "../comp/app";

import five from "../comp/five.json";

export default function Home(props) {
  const { answer } = props;

  return (
    <>
      <Head>
        <title>Wordsy</title>
        <meta name="Wordsy" content="The word game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App answer={answer} />
      <footer>Made by me</footer>
    </>
  );
}

const randomWord = () => {
  let words = Object.keys(five);
  let r = Math.floor(Math.random() * words.length);
  return words[r];
};

export async function getServerSideProps(context) {
  return {
    props: {
      answer: randomWord(),
    },
  };
}
