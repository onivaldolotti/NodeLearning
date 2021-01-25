exports.index = (req, res) => {
    // let nome = req.query.nome;
    // let sobrenome = req.query.sobrenome;
    //
    // // res.json({
    // //     nomeCompleto: nome+ ' ' +sobrenome
    // // });
    //
    // //GET = req.query
    // //POST = req.body
    //
    // res.send('Olá ' + nome+ ' ' +sobrenome);

    // let obj = {
    //     nome: req.query.nome,
    //     idade: req.query.idade,
    //     mostrar: true,
    //     ingredientes:[
    //         {nome: 'Arroz', qt:'20g'},
    //         {nome: 'Strogonof', qt: '50g'}
    //     ]
    // }

    let obj = {
        pageTitle: "teste 123",
        userInfo: {name: 'Onivaldo'}
    }
    res.render('home', obj);
};

//
// exports.userMiddleware = (req, res, next) => {
//     let info = {name:'onivaldo', id:123};
//     req.userInfo = info;
//     next();
// };
