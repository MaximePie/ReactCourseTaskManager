const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Forme de l'utilisateur
// Les détails supplémentaires (dont la collection);
const UserSchema = new Schema({
    username: {type: String, required: true},
    age: {type: Number},
    job: {type: String},
}, {
    collection: "users"
})

// Créer le modèle
const User = mongoose.model( 'User', UserSchema)

module.exports = User;