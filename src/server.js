const express = require("express");
const app = express();
import { router } from "./routes";

const PORT = 8080;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
