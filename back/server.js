import { app } from "./src/app.js";

const port = 5000;

app.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});
