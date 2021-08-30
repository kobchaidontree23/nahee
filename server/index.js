const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "kobchai",
    host: "localhost",
    password: "718293456za",
    database: "reactor"
})

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/create', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const position = req.body.position;

    db.query("INSERT INTO employees (firstname, lastname, email, position) VALUES(?,?,?,?)",
        [firstname, lastname, email, position],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted!");
            }
        }
    );
});


app.listen('3001', () => {
    console.log('Server is running on port 3001');
})