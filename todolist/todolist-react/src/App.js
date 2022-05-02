import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos.components';
import Articles from './components/Articles.js';
import Users from './components/Users.js';

// Créer un composant src/components/addTodo.components.js
// Créer un composant src/components/viewTodo.components.js
// Générer ces deux composants depuis App.js

function App() {
  return (
    <div className="App">
      <Todos/>
      <Articles/>
      <Users/>
    </div>
  );
}

export default App;
