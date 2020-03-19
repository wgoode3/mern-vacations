const express = require("express");
const cors = require("cors");
const db_name = "vacationerDB";
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

require("./config/mongoose.config")(db_name);
require("./routes/vacation.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));