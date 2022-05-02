
// Les props sont au composant
// Ce que les paramètres sont à la fonction
import React from "react";
import axios from "axios";

export default function User(props) {
  const age = props.user.age;
  const username = props.user.username;
  const _id = props.user._id;

  // On peut destructurer n'importe quel objet.
  // const {age, username, _id} = props.user;

  return (
    <div className="User">
      <p>Username : {username}</p>
      <p>Age : {age}</p>
      <p>Id : {_id}</p>
      <div>
        <button>Enregistrer</button>
        <button onClick={() => {
          deleteUser(_id);
        }}>
          {
            /*
            <button onClick={function() {
                deleteUser(element._id);
            }
            }}>

             */
          }
          Supprimer
        </button>
      </div>
    </div>
  )

  async function deleteUser() {
    await axios.delete('http://localhost:5050/users/' + _id)
    props.afterDelete()
  }
}