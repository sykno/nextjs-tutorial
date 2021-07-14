export default function handler(req, res) {
  // res.statusでステータスコードを返却できる
  res.status(200).json({ text: "Hello" });
}
