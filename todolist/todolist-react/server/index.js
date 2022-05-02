let express = require('express');
let mongoose = require('mongoose');
let mongoDb = require('./db');
const cors = require('cors');
let todoRoute = require('./routes/todo.route.js');
let articleRoute = require('./routes/article.js');
let userRoutes = require('./routes/user.js');
const formidableMiddleware = require('express-formidable');

// 1 - Créer une route /todos qui affiche "bien reçu" dans le navigateur
// 2 - Créer le modèle de Todo dans le fichier Todo.js
// 3 - Créer les routes de todo pour créer une tâche et récupérer les tâches 
// 4 - Relier ces routes à notre index.js comme pour Users.

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
  console.log('Database connected Haha!')

  const app = express();
  app.use(cors()); // Pour autoriser les échanges depuis l'extérieur du serveur
  app.use(formidableMiddleware()); // Pour recevoir des données en POST

  // Ici, on relie userRoute à notre application
 
  app.use('/todo', todoRoute)
  app.use('/articles', articleRoute)
  app.use('/users', userRoutes)

  const port = process.env.PORT || 5050;
  app.listen(port, () => {
    console.log('Connected on : ' + port)
  })
},
error => {
    console.log(error)
  }
)