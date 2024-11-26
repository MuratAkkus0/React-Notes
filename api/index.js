import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/users", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Murat",
      surname: "Akkus",
    },
    {
      id: 2,
      name: "Muhammed",
      surname: "Akkus",
    },
    {
      id: 3,
      name: "Umut",
      surname: "Akkus",
    },
  ]);
  res.status(200);
});

app.listen(port, () => console.log("listenin port: " + port));
