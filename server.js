//require all dependencies
const express = require("express");
const app = express();
const cors = require("cors");
var PORT = process.env.PORT || 8000;
app.use(express.static(__dirname + "/public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const noteRoutes = require("./routes/notes");

app.use("/", noteRoutes);
///initialize port to start listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
