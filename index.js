const express = require('express');
const app = express();
const PORT = 8080;
//const mysql = require('mysql'); // Not in use at the moment

// IMPORT ALL THE ROUTES
require("./routes")(app);

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive in on http://localhost:${PORT}`)
)
app.get('/', (req, res) => {
    res.status(200).send({
        "welcome": 'Shaking Hands Overseas'
    })
});
