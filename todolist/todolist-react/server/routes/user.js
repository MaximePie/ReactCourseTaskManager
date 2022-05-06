const express = require('express');
const User = require('../models/User');
const router = express.Router();
const displayUsers = require('../userController');

async function createUsers(request, response) {
    const userData = request.fields;
    const createdUser = await User.create(userData)
    response.json(createdUser)
}

router.get('/', displayUsers)
router.post('/', createUsers)

router.put('/', async (request, response) => {
    // Récupère les infos envoyées par le formulaire
    console.log(request.fields);

    const user = {
        username: request.fields.username,
        job: request.fields.job,
        age: request.fields.age,
    }

    // findByIdAndUpdate
    await User.findByIdAndUpdate(request.fields._id, user)

    // Trouver l'utilisateur qui correspond à l'_id reçu
    // Et on modifie avec les nouvelles informations
    // Renvoyer le nouvel utilisateur modifié
    response.json('ok');
})

// DELETE, /users/1 fonctionne.
// DELETE, /users/2 fonctionne.
// DELETE, /users/Haha fonctionne.
router.delete('/:id', async (request, response) => {
    // Pour récupérer ce qu'il y a dans :id, utiliser request.params.
    console.log(request.params.id); // 1, ou 2, ou Haha. 

    const id = request.params.id;
    // Une fois que nous avons l'ID, on peut déclencher .findByIdAndDelete
    const result = await User.findByIdAndDelete(id);
    response.json(result);
})

module.exports = router;