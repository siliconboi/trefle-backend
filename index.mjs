import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import fetch from "node-fetch";

const app = express();
app.use(morgan('dev'));
app.use(cors())

const PORT = process.env.PORT || 8080;

app.get("/token", async () => {
  const res = await fetch('https://trefle.io/api/auth/claim', {
    method: "post",
    body: {
      "origin": "https://flower-shop-ssr.vercel.app/",
      "token": "nPhiI1owDYQTM_cM-GzkSeO-w7_zFtZ3dRGKPwPVQ0o",
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res)
  const json = await res.json();
  const token = json.token;
  return token;
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
