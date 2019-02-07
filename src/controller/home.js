const ctrl = {};



ctrl.index = (req, res) => {
    res.send('index page')
};

ctrl.signup = (req, res) => {
    res.send('index page')
};

ctrl.login = (req, res) => {
    res.send('no chido')
};

ctrl.logout = (req, res) => {
    req.logout();
    res.redirect('/');
};

module. exports = ctrl;