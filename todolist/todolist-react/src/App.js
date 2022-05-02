import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/pages/Todos.components';
import Articles from './components/pages/Articles.js';
import Users from './components/pages/Users.js';
import {PouletClass, PouletFunction} from "./components/pages/Poulet";

// Créer un composant src/components/addTodo.components.js
// Créer un composant src/components/viewTodo.components.js
// Générer ces deux composants depuis App.js

function App() {
  return (
    <div className="App">
      <PouletFunction message="female"/>
      <PouletClass message="male"/>
      {/*<Todos/>*/}
      {/*<Articles/>*/}
      {/*<Users/>*/}
    </div>
  );
}

export default App;
