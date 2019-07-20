import app from './config/server';
import bodyParser from 'body-parser';
import routes from './app/routes/home';

app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'));
});
