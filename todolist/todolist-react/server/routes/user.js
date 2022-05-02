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