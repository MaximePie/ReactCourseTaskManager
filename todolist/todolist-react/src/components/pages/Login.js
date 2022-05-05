import {UserContext} from "../../App";
import {useContext} from "react";


export default function Login() {

  const context = useContext(UserContext);
  console.log(context); // { isConnected:true }
  console.log(context.text); //
  return (
    <div className="Login">
      <button onClick={context.login}>
        Se connecter
      </button>
      <button onClick={onLogoutClick}>
        Se déconnecter
      </button>
      <p>
        {context.isConnected ? "Connecté" : "Déconnecté"}
      </p>
    </div>
  )

  function onLogoutClick() {
    /**
     * Il s'agit d'une deuxième manière de noter.
     */
    context.logout();
  }
}