import express from "express";
import { fileURLToPath } from 'url'; // Import the fileURLToPath function
import path from "path";

const __filename = fileURLToPath(import.meta.url); // Get the current file's URL
const __dirname = path.dirname(__filename); // Obtain the directory name

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("tracker.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
