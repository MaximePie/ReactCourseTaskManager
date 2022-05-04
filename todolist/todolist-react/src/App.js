import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/pages/Todos.components';
import Articles from './components/pages/Articles.js';
import Users from './components/pages/Users.js';
import {PouletClass, PouletFunction} from "./components/pages/Poulet";
import {createContext, useState} from "react";

// On crée un nouveau contexte UserContext avec pour valeur par défaut : false
export const UserContext = createContext(false);

function App() {
  // L'état isConnected permet de savoir si l'utilisateur est connecté ou non.
  // Problème : Il faut faire passer cette valeur aux composants enfants pour leur permettre de s'adapter en fonction
  // de l'état de connexion.
  // Par exemple, on souhaite interdire aux utilisateurs non connectés de supprimer d'autres utilisateurs.
  // => Il faut faire passer cette valeur par des props au Composant User
  const [isConnected, setConnectionState] = useState(true);

  // 2 - Envelopper l'application dans un Provider
  // 3 - Donner une valeur au Provider
  return (
    <UserContext.Provider value={isConnected}>
      <div className="App">
          <button onClick={login}>Se connecter</button>
          <button onClick={logout}>Se déconnecter</button>
          <p>
            {isConnected ? "Connecté" : "Déconnecté"}
          </p>
          {/*<PouletFunction message="female"/>*/}
          {/*<PouletClass message="male"/>*/}
          {/*<Todos/>*/}
          {/*<Articles/>*/}
          <Users/>
        </div>
    </UserContext.Provider>
  );

  function login() {
    setConnectionState(true);
  }


  function logout() {
    setConnectionState(false);
  }



}

export default App;
