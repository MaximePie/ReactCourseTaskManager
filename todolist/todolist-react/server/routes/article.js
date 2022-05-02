const express = require ('express');
const router = express.Router();
const Article = require ('../models/Article.js');
// https://mongoosejs.com/docs/queries.html, liste des requêtes qu'on peut faire avec Mongoose
// Préfixée par /articles dans index.js au moment de app.use('/articles', articlesRoutes);
router.route("/").get(async (req, res) => {
    // Qu'est-ce qu'on veut faire ?
    // Récupérer tous les articles 
 
    // JS n'attend pas la fin d'une instruction pour lancer la suivante. 
    // Si une instruction prend du temps à exécuter, comme .find
        // Alors il n'attend pas la fin pour enchaîner.
    // Si on a besoin du résultat de .find pour la suite du code, utiliser AWAIT/ASYNC
    // Si on essaie d'utiliser le résultat sans attendre la fin de .find, nous aurons juste
    // l'état de la requête, et c'est tout. 
    const articles = await Article.find({});
    // Une fois que c'est terminé, on les renvoie au format json.
    res.json(articles);
})
router.post('/', async(req,res) => {
    // Poster les données de notre article. 
    // Récupérer les données dans la requête
    // Créer l'article dans la base de données
    const article = req.fields
    const newArticle = await Article.create(article)
    console.log(article)

    res.json(newArticle)
})

router.get('/delete', async (req, res) => {
    console.log()
    const deleteArticle = await Article.findByIdAndDelete(article._id)
})

// router.get('/', async(request, response) => {})
// router.post('/', async(request, response) => {})



module.exports = router;