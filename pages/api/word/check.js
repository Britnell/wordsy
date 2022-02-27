// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import five from "../../../comp/five.json";

export default function handler(req, res) {
  const {
    query: { word },
  } = req;
  res.status(200).json({
    word: word,
    exists: five.hasOwnProperty(word),
  });
}
