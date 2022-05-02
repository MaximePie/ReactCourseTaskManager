const User = require('./models/User');

async function displayUsers(request, response) {
    const users = await User.find({});

    // Test Driven Development
    if (users.length === 0) {
        response.json({
            users: [],
            message: "Ayaya",
        })
    }

    response.json({
        users: users,
        message: "OK",
    })
}

module.exports = displayUsers;