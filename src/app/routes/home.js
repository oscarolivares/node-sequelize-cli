import db from '../../db/models/index';

export default app => {
  app.get('/users', (req, res) => {
    // Find all elements from db and send them to the view
    // This route also get data from user/add redirect

    /* res.render('home/home'); */
    /* db.User.findAll().then(users => {
      const id = users[0].id;
      res.json(users);
    }); */

    const addStatus = req.query.addStatus;

    db.User.findAll({ raw: true })
      .then(users => {
        res.render('home/home', {
          users,
          addStatus
        });
      })
      .catch(err => {
        res.status(500).render('home/home', {
          users: null,
          addStatus,
          error: 'db-connection-refused',
        });
      });
  });

  app.post('/users/add', (req, res) => {
    // Create an user, if it fails, sends fail state to /users

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
        /* res.status(500).render('home/home', {
          users: null,
          error: 'connection refused'
        }); */
        const addStatus = encodeURIComponent('fail');
        res.redirect('/users/?addStatus=' + addStatus);
      });
  });
};
