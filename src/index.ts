import express from "express";
import path from "path";
import router from "./api";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Use /api.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
