import app from './config/server';
import routes from './app/routes/home';

routes(app);

app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'));
});
