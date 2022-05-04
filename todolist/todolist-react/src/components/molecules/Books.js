import React, {useState} from "react";

/**
 * Livre :
   * title: '',
   * author: '',
   * pages: 10,
   * genre: ''
 */

export default function Books() {

  const [book, setBook] = useState({});

  return (
    <div className="Books">
      <h4>Qu'on est bien dans les livres</h4>
      <div>
        <label htmlFor="">Titre</label>
        <input
          type="text"
          onChange={updateField}
          name="title"
        />
      </div>
      <div>
        <label htmlFor="">Auteur</label>
        <input
          type="text"
          onChange={updateField}
          name="author"
        />
      </div>
      <div>
        <label htmlFor="">Nombre de pages</label>
        <input
          type="text"
          onChange={updateField}
          name="pages"
        />
      </div>
      <div>
        <label htmlFor="">Genre</label>
        <input
          type="text"
          onChange={updateField}
          name="genre"
        />
      </div>
      <button
        type="button"
        onClick={displayData}
      >
        Afficher les données
      </button>
    </div>
  )

  function updateField(event) {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    })
  }


  function displayData() {
    console.log("Prêt à envoyer les données");
    console.log(book);
  }
}