import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h4>Ici sera la navbar</h4>
      <div>
        <NavLink to="/users">Utilisateurs en joli</NavLink>
        <NavLink to="/baba">Books</NavLink>
        <NavLink to="/todo">Tâches</NavLink>
        <NavLink to="/products">Courses</NavLink>
        <NavLink to="/login">Se connecter</NavLink>
        <NavLink to="/champignon">Champignon</NavLink>
      </div>
    </div>
  )
}