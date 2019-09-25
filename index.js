///left off at 1:04 minutes
// https://www.youtube.com/watch?v=L72fhGm1tfE

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

//Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//HomePage Route
app.get('/', (req, res) => res.render('index'));

//BodyParser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
