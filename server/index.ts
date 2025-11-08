import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api/test", (req, res) => {
  console.log("Received request @ '/api/test'... sending response message");
  return res.json({ message: "Hello from express server" });
});

app.listen(PORT, () => {
  console.log(`Express server started on ${PORT}`);
});
