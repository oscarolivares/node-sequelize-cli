import db from '../../db/models/index';

export default app => {
  app.get('/', (req, res) => {
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
};
