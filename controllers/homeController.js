const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.index = async (req, res) => {
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

    let responseJson = {
        pageTitle: "HOME",
        userInfo: {name: 'Onivaldo'},
        posts: [],
        tags: [],
        tag: ''
    }

    responseJson.tag = req.query.t;
    const postFilter = responseJson.tag != undefined ? {tags: responseJson.tag}:{};

    const tagsPromise = Post.getTagsList();
    const postsPromise = Post.find(postFilter);
    const [tags, posts] = await Promise.all([tagsPromise, postsPromise]);

    for (let i in tags) {
        if(tags[i]._id == responseJson.tag) {
            tags[i].class = "selected";
        }
    }
    responseJson.tags = tags;

    responseJson.posts = posts;

    res.render('home', responseJson);
};

//
// exports.userMiddleware = (req, res, next) => {
//     let info = {name:'onivaldo', id:123};
//     req.userInfo = info;
//     next();
// };
