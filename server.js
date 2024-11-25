const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require('body-parser');
const SchoolRoute = require("./Routes/schoolRoutes");
const app = express();
const PORT = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use("/api", SchoolRoute )

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// # DB_HOST=localhost
// # DB_USER=root
// # DB_PASSWORD=123456
// # DB_NAME=school_management
// # PORT=8000