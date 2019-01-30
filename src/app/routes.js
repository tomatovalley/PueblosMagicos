module.exports = (app, passport) => {

  app.get('/', (req, res) => {
    res.render('index')
  });

  app.get('/login', (req, res) => {
    res.render('login', {
      message: req.flash('loginMessage')
    })
  });

  app.get('/signup', (req, res) => {
    res.render('signup', {
      message: req.flash('signupMessage')
    })
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  app.get('/test', (req, res) => {
    res.render('test2', {
      message: req.flash('testMessage')
    })
  });

  app.get('/publicaciones', (req, res) => {
    res.render('publicaciones', {
      message: req.flash('publicacionesMessage')
    })
  });

};
