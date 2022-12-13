import "dotenv/config"
import app from "./app";
import { startDatabase } from "./database";

app.listen(3007, async () => {
    await startDatabase();
    console.log("App is running on http://localhost:3007");
});

// console.log(server)

module.exports = app