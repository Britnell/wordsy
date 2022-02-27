// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import five from "../../../comp/five.json";

const randomWord = () => {
  let words = Object.keys(five);
  let r = Math.floor(Math.random() * words.length);
  return words[r];
};

export default function handler(req, res) {
  res.status(200).json({ word: randomWord() });
}
