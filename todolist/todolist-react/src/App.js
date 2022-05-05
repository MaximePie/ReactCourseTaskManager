import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/pages/Todos.components';
import Articles from './components/pages/Articles.js';
import Users from './components/pages/Users.js';
import {PouletClass, PouletFunction} from "./components/pages/Poulet";
import Books from "./components/molecules/Books"
import {createContext, useState} from "react";
import {Route, Routes, Link} from "react-router-dom";

export const UserContext = createContext(false);


/**
 * React Router
 * Une librairie qui permet d'installer des routes
 *
 * Dans notre application on pourra décliner nos composants en plusieurs pages.
 *
 * Pour accéder à ces pages, il faut des routes.
 *
 * Des composants sont mis à notre disposition pour le faire.
 * 1 - Installer react-router-dom avec npm.
 * npm install react-router-dom
 *
 * 2 - Envelopper notre application dans un BrowserRouter
 *
 * 3 - <Route path='lechemin', element = "ce qu'on veut afficher si le chemin est respecté"
 */


function App() {

  const [isConnected, setConnectionState] = useState(true);

  return (
    <UserContext.Provider value={isConnected}>
      <div className="App">
        <div>
          <h4>Ici sera la navbar</h4>
          <div>
            <Link to="/test">Test</Link>
            <Link to="/users">Utilisateurs</Link>
            <Link to="/baba">Books</Link>
            <Link to="/todo">Tâches</Link>
            <Link to="/products">Courses</Link>
          </div>
        </div>
        <button onClick={login}>Se connecter</button>
        <button onClick={logout}>Se déconnecter</button>
        <p>
          {isConnected ? "Connecté" : "Déconnecté"}
        </p>
        <Routes>
          <Route path="/test" element={<div>Test réussi</div>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/baba" element={<Books/>}/>
          <Route path='/todo' element={<Todos/>}/>
          <Route path='/products' element={<Articles/>} />
        </Routes>
        <div>
          <h4>Ici sera le footer</h4>
        </div>
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
