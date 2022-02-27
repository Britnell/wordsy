import { useEffect, useState } from "react";
import styles from "./app.module.css";

const GuessInput = ({ makeGuess }) => {
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");

  const submit = async (ev) => {
    ev.preventDefault();

    if (input.length !== 5)
      return setError({
        from: input,
        msg: "only 5 letter words",
      });

    let { exists } = await fetch(`/api/word/check?word=${input}`).then((res) =>
      res.json()
    );

    if (!exists)
      return setError({
        from: input,
        msg: " word not in our dict - sorry ",
      });

    // * Exists > submit
    makeGuess(input);
    setError(null);
    setInput("");
  };

  useEffect(() => {
    // Clear error
    if (error && error.from !== input) setError(null);
  }, [input, error]);

  return (
    <div className={styles.inputcontainer}>
      <form onSubmit={submit}>
        <div className={styles.inputdiv}>
          <input
            className={styles.input}
            type="text"
            value={input}
            onChange={(ev) => setInput(ev.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
        <div>
          <label className="guesserror">{error && error.msg}</label>
        </div>
      </form>
    </div>
  );
};

export default GuessInput;
