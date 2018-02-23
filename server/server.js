const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const publicpath = path.join(__dirname, '../public');
app.use(express.static(publicpath));


app.get('/', (req, res) => {
    res.render(index.html);

});

app.listen(port);
