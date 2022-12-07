const express = require('express');
const cookieParser = require('cookie-parser');
const port = 9090;
const app = express();
app.use(cookieParser());
app.get('/', (req, res) => {
    res.cookie('user', 'farman').send("cookie has bee set");
})

app.get('/show', (req, res) => {
   res.send(req.cookies);
})

app.get('/clear', (req, res) => {
    res.clearCookie('user').send("cookie has been cleared");
})




app.listen(port, (err) => {
    if (err) throw err
    else
    {
        console.log("server wroking at" + port);
        }
})