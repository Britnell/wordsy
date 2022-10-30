import styles from "./keyboard.module.css";

const keyboardRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
const Keyboard = ({ guesses, answer }) => {
  const guessedLetters = guesses.join("");

  const checkLetter = (ch) =>
    guessedLetters.includes(ch)
      ? answer.includes(ch)
        ? "occur"
        : "guessed"
      : "x";

  return (
    <div>
      <div className={styles.keyboard}>
        {keyboardRows.map((row) => (
          <div className={styles.row} key={row}>
            {row.split("").map((ch) => {
              const occurence = checkLetter(ch);
              return (
                <div
                  className={styles.letter + " " + styles[occurence]}
                  key={ch}
                >
                  {ch}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
