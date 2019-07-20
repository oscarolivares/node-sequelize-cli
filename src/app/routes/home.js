import db from '../../db/models/index';

export default app => {
  app.get('/users', (req, res) => {
    //Find all elements from db and send them to the view

    /* res.render('home/home'); */
    /* db.User.findAll().then(users => {
      const id = users[0].id;
      res.json(users);
    }); */
    db.User.findAll({ raw: true })
      .then(users => {
        res.render('home/home', {
          users
        });
      })
      .catch(err => {
        res.status(500).send('Connection refused');
      });
  });

  app.post('/users/add', (req, res) => {
    // Create an user

    db.User.create(req.body)
      .then(result => {
        console.log(
          result.get({
            plain: true
          })
        );
        res.redirect('/users');
      })
      .catch(err => {
        res.status(500).send('Connection refused');
      });
  });
};
