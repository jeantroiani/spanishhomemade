var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', './views'); // specify the views directory

app.get('/', (req, res) => {
    res.sendfile(__dirname +'/views/index.html');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
