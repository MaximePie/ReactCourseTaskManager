import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/pages/Todos.components';
import Articles from './components/pages/Articles.js';
import Users from './components/pages/Users.js';
import {PouletClass, PouletFunction} from "./components/pages/Poulet";
import {createContext, useState} from "react";

// Créer un composant src/components/addTodo.components.js
// Créer un composant src/components/viewTodo.components.js
// Générer ces deux composants depuis App.js

// 1 - Créer le contexte avec une source de vérité
export const UserContext = createContext({
  text: "",
  setText: () => {},
});

function App() {

  const [text, setText] = useState('');

  // 2 - Envelopper l'application dans un Provider
  // 3 - Donner une valeur au Provider
  return (
    <UserContext.Provider value={{
      text: text,
      setText: setText
    }}>
      <div className="App">
        {/*<PouletFunction message="female"/>*/}
        {/*<PouletClass message="male"/>*/}
        {/*<Todos/>*/}
        {/*<Articles/>*/}
        <Users/>
      </div>
    </UserContext.Provider>
  );



}

export default App;
