const User = require('../models/User');

exports.login = (req, res) => {
    res.render("login");
};

exports.loginAction = (req, res) => {
    const auth = User.authenticate();

    auth(req.body.email, req.body.password, (error, result) => {
        if(!result) {
            req.flash('error', 'E-mail e/ou senha errados!');
            res.redirect('/users/login');
            return;
        }

        req.login(result, ()=>{});

        req.flash('success', 'Logado com sucesso!');
        res.redirect('/');
    });
}

exports.register = (req, res) => {
    res.render('register');
}

exports.registerAction = (req, res) => {
    const newUser = new User(req.body);
    User.register(newUser, req.body.password, (error) => {
        if(error) {
            req.flash('error', 'Erro ao registrar:' , error);
            res.redirect('/users/register');
            return;
        }

        req.flash('success', "Usuário cadastrado com sucesso.");
        res.redirect('/users/login');
    });
};

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/users/login');
}
