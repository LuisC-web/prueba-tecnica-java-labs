

import "dotenv/config";
import app from "./server";
const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(
    console.log(`Server is running on http://localhost:${port}`)
  );
});
