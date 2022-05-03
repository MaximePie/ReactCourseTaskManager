import React, {Component, useEffect, useState} from "react";
// Class, ou fonction ?

// PouletClass
export class PouletClass extends Component {
  constructor() {
    super();

    this.state = {
      jours: 1,
      race: "",
      stade: "",
    }
  }

  // Naissance du poulet
  componentDidMount() {
    console.log("naissance du poulet");
  }

  // Changement d'état du poulet
  // Déclenché dès qu'il y a un setState
  componentDidUpdate(prevProps, prevState) {
    if (this.state.jours > 10) {
      if (this.state.jours !== prevState.jours) {
        // Le jour a changé de valeur
        console.log("Le jour a changé de valeur");
      }
      console.log(prevState);
      console.log(this.state);

      if (this.state.stade !== "Jeune poulet") {
        this.setState({
          stade: "Jeune poulet",
        })
      }
    }
  }

  // Mort du poulet
  componentWillUnmount() {
    // Faire savoir au serveur que nous n'attendons plus les résultats.
  }

  render() {

    const messageFinal = this.props.message === 'male' ? "Cocorico" : "Rien du tout"

    // let messageFinal = "";
    // if (this.props.message === 'male') {
    //   messageFinal = "Cocorico";
    // }
    // else {
    //   messageFinal = "Rien du tout";
    // }

    return (
      <div className="Poulet">
        <p>Ceci est le composant pouleto <strong>class</strong></p>
        <p>Le poulet a {this.state.jours} jours. {this.state.stade}</p>
        <p>Oh, let poulet a un message : {messageFinal}</p>
        <button onClick={this.increaseDays}>+1 jour</button>
      </div>
    )
  }

  // Pour déclarer une méthode qui utilise this.X, déclarer de cette manière. Sinon ça marche pas.
  increaseDays = () => {
    this.setState({
      jours: this.state.jours + 1
    })
  }
}
// PouletFunction
export function PouletFunction(props) {

  const [jour, setJour] = useState(0);
  const [stade, setStade] = useState('poussin');

  useEffect(checkStadePoulet); // Se déclenche dès qu'on fait un setState
  useEffect(checkStadePoulet, [jour]); // Déclenche checkStadePoulet à chaque fois que jour est modifié

  useEffect(() => {
    console.log("NAissance du poulet");
  }, [])

  const messageFinal = props.message === 'male' ? "Cocorico" : "Rien du tout"

  return (
    <div className="Poulet">
      <p>Ceci est le composant pouleto <strong>Function</strong></p>
      <p>Oh, le poulet a un message : {messageFinal}</p>
      <p>Age en jours : {jour} : {stade}</p>
      <button onClick={increaseDays}>+1 jour</button>
      <button onClick={() => setJour(jour + 1)}>+1 jour</button>
    </div>
  )

  function checkStadePoulet() { // ComponentDidMount & ComponentDidUpdate
    console.log("Le state a changé.");
    if (jour > 5) {
      setStade('Poulet');
    }
  }

  function increaseDays() {
    setJour(jour + 1) // Tout ce qui suit un setState est ignoré pour le reste du block
  }
}


// Cycles de vie, componentDidMount, ... useEffect.