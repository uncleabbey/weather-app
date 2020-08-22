const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.engine(
  'handlebars',
  exphbs({
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: path.join(__dirname, '../views/partials/'),
  })
);
app.set('view engine', 'handlebars');

app.use('/', routes);

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Server is running on port:${port}`));
