const express = require('express');
const app = express()
const port = 3010

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/static', express.static('public'))

app.post('/results', function (request, response) {
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    console.log(firstName, lastName);
    for (k in request.headers){
        console.log(k, request.headers[k])
    }
});
console.log(module)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


