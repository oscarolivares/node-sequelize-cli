import db from '../../db/models/index';

export default app => {
  app.get('/users', (req, res) => {
    /* res.render('home/home'); */
    /* db.User.findAll().then(users => {
      const id = users[0].id;
      res.json(users);
    }); */
    db.User.findAll({ raw: true }).then(users => {
      res.render('home/home', {
        users
      });
    });
  });

  app.post('/users/add', (req, res) => {
    db.User.create(req.body).then(result => {
      console.log(
        result.get({
          plain: true
        })
      );
      res.redirect('/users');
    });
  });
};
