const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * 1 article = ?
 * nom, qui est un String
 * quantite, qui est un number
 * prix: Number = null
 */

// https://mongoosejs.com/docs/validation.html
const formeArticle = { // C'est un moule
    name : {type: String, required: true},
    quantity : {type: Number, required: true},
    price : {default: 0, type: Number}
};

let ArticleSchema = new Schema(formeArticle, {
    collection: 'article'
});

// La méthode model de mongoose prend deux paramètres : où stocker le modèle et sous quelle forme
module.exports = mongoose.model('Article', ArticleSchema);