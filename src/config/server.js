import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

export default app;
