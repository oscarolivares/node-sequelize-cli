import db from '../../db/models/index';

export default app => {
  app.get('/users', (req, res) => {
    // Find all elements from db and send them to the view
    // This route also get data from user/add redirect

    const addStatus = req.query.addStatus;

    db.User.findAll({ raw: true })
      .then(users => {
        res.render('home/home', {
          users,
          addStatus,
          error: null
        });
      })
      .catch(err => {
        res.status(500).render('home/home', {
          users: null,
          addStatus,
          error: 'db-connection-refused'
        });
      });
  });

  app.post('/users/add', (req, res) => {
    // Create an user, if it fails, sends fail state to /users

    db.User.create(req.body)
      .then(result => {
        /* console.log(
          result.get({
            plain: true
          })
        ); */
        res.redirect('/users');
      })
      .catch(err => {
        const addStatus = encodeURIComponent('fail');
        res.redirect('/users/?addStatus=' + addStatus);
      });
  });

  app.post('/users/delete', (req, res) => {
    // Delete an user by id

    db.User.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(result => {
        res.redirect('/users');
      })
      .catch(err => {
        const delStatus = encodeURIComponent('fail');
        res.redirect('/users/?delStatus=' + delStatus);
      });
  });

  app.post('/users/update', (req, res) => {
    // Update an user by id
    
    db.User.update(req.body, {
      where: {
        id: req.body.id
      }
    })
      .then(result => {
        res.redirect('/users');
      })
      .catch(err => {
        const updateStatus = encodeURIComponent('fail');
        res.redirect('/users/?updateStatus=' + updateStatus);
      });
  });
};
