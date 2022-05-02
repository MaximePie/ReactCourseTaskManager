const User = require('./models/User');

async function displayUsers(request, response) {
    const users = await User.find({});

    // Test Driven Development
    if (users.length === 0) {
        response.json({
            users: [],
            message: "Aucun utilisateur n'a été trouvé",
        })
    }

    response.json({
        users: users,
        message: "Nous avons trouvé " + users.length + " utilisateurs.",
    })
}

module.exports = displayUsers;