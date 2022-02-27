import { useEffect, useState } from "react";
import Guess from "./guess";
import styles from "./app.module.css";
import GuessInput from "./input";

const Solved = ({ restart, meanings }) => (
  <div>
    <div>Well done!</div>
    <div>
      <button onClick={restart}>Play again</button>
    </div>
    <div>
      {meanings.map((m) => (
        <p className={styles.meaning}>
          [{m.speech_part}] - {m.def}
        </p>
      ))}
    </div>
  </div>
);

const App = ({ answer }) => {
  const [guesses, setGuesses] = useState([]);
  const [meanings, setMeanings] = useState("");

  const solved = guesses.includes(answer);
  const makeGuess = (g) => setGuesses([...guesses, g]);
  const restart = () => window.location.reload();

  useEffect(() => {
    fetch(`/api/word/meaning?word=${answer}`)
      .then((res) => res.json())
      .then((res) => setMeanings(res.meaning.meanings));
  }, []);

  return (
    <>
      <header>
        <h1>WORDSY</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.guesses}>
          {guesses.map((g, i) => (
            <Guess key={i} guess={g} answer={answer} />
          ))}
        </div>
        {solved ? (
          <Solved restart={restart} meanings={meanings} />
        ) : (
          <GuessInput makeGuess={makeGuess} />
        )}
      </main>
    </>
  );
};

export default App;

// const [meanings, setMeanings] = useState([]);
// useEffect(() => {
//   if (guesses.length > 0) {
//     const last = guesses[guesses.length - 1];
//     fetch(`/api/word/meaning?word=${last}`)
//       .then((res) => res.json())
//       .then((res) => {
//         const lastMeanings = res.meaning.meanings;
//         setMeanings([...meanings, lastMeanings]);
//       });
//   }
// }, [guesses]);
