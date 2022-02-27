import styles from "./app.module.css";

const Guess = ({ guess, answer }) => {
  const letters = guess.split("");

  return (
    <>
      {letters.map((l, i) => {
        const match = guess[i] === answer[i];
        const included = answer.includes(l);

        return (
          <div
            key={i}
            className={[
              styles.letter,
              match ? styles.match : included ? styles.included : "",
              included,
            ].join(" ")}
          >
            <span>{l}</span>
          </div>
        );
      })}
      {/* {guess === answer && <Answer answer={answer} />} */}
    </>
  );
};

export default Guess;
