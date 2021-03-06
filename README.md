# ReactCourseTaskManager

## Commandes git

- `git pull` : Récupère le code en ligne
- `git checkout <idCommit>` : Nous place sur le code d'un commit particulier.
    - Attention, `git pull` ne marchera pas depuis ce commit. Pour pouvoir `pull`, utiliser `switch`.
- `git switch main` : Retourne sur la branche main, et permet de faire un `git pull`.

## 1 - Notre première liste des tâches

Correction : 1237a1b6f7816132bc88e2be5b1b9825aa076650

Créer une application de gestion de tâches en React avec des composants `Task`.

Pour chaque tâche présente dans la liste des tâches, afficher un composant `Task`.

Le composant `Task` :

- affiche le texte de la tâche reçue en props.
- Affiche un bouton "Supprimer"

Bonus :

- Transformer le bouton Supprimer en un composant PrimaryButton

## 2 - Terminer une tâche

Modifier le code de manière à ce que :

- Le bouton "Supprimer" devient le bouton "Terminer"
- Lorsque l'on clique sur le bouton "Terminer", la couleur de la tâche passe en vert.
- Lorsque l'on clique de nouveau sur le bouton "Terminer", la couleur de la tâche passe en noir, qui est la couleur de
  base.

### Consulter le code ici :

States: Modifier le state lors du clic sur un
bouton : https://github.com/MaximePie/ReactCourseTaskManager/commit/24b4e70cf824c7ab81d0e8dd105cdb6f0228a473
States: Modifier le texte du
bouton: https://github.com/MaximePie/ReactCourseTaskManager/commit/b97686466a011d09180b19305e13a8b1162efc46
States: Appeler updateTaskState depuis un composant
enfant: https://github.com/MaximePie/ReactCourseTaskManager/commit/d2c1a863e9706df212692905064caed967375e11

### Ressources

💡 - Créer un state en React : https://fr.reactjs.org/docs/hooks-state.html

## 3 - Créer une tâche

Modifier le code de manière à ce que :

- Un formulaire pour créer une nouvelle tâche est affiché
- Le formulaire propose :
    - Un champ de texte pour saisir le nom de la tâche
    - Un bouton Enregistrer
- Lorsque l'on clique sur "Enregistrer", la liste des tâches est mise à jour et une tâche est ajoutée.

- 💡 Vous pouvez commencer par essayer d'ajouter une tâche fixe au click du bouton, puis de vous concentrer sur le champ
  de texte
- 💡 Utilisez `onChange` pour savoir quelle est la nouvelle valeur
- 💡 Problème avec la mise à jour du tableau
  ? [Consultez ce lien](https://www.google.com/search?q=React+update+array+in+state&rlz=1C1CHBF_frFR884FR884&oq=React+update+array+in+state&aqs=chrome..69i57j0i19j69i64l3.7152j0j7&sourceid=chrome&ie=UTF-8)

## 4 - Ajouter des vérifications sur le formulaire

Modifier le code de manière à ce que :

- Lorsque le champ de nouvelle tâche est vide :
    - Le bouton est bloqué (attribut `disabled`)
    - Le champ de texte est contouré en rouge
    - Un message d'avertissement s'affiche en rouge en dessous du champ de texte

- Lorsqu'une nouvelle tâche est créée, vider le champ du formulaire pour permettre de saisir une nouvelle tâche

- 💡 Quelle est la valeur qui détermine si le formulaire est valide ou non ? Cette réponse vous aidera à déterminer
  les `states`.
- 💡 Envie de déclencher une action après la modification d'un state ? Utilisez `useEffect`. Plus d'informations
  ici : https://fr.reactjs.org/docs/hooks-effect.html

## 5 - Organiser le projet en différents fichiers

### Consignes

- Modifier la structure du projet de manière que :
    - Le projet comporte un fichier `app.js` dans lequel tout le script React est placé.
    - `index.html` importe le script React avec `script` et `src='./app.js'`

- Modifier la structure du projet :
    - Créer un dossier `components`
    - Créer le fichier `PrimaryButton.js`, et y inscrire le code du composant `PrimaryButton`
    - exporter le composant `PrimaryButton` par défaut.

```js
  // PrimaryButton.js
export default function PrimaryButton(props) {
  console.log(props); // { text: "Un texte", userClicksTheSuperButton: function}
  return (<button onClick={props.userClicksTheSuperButton}>{props.text}</button>)
}
```

- Importer le composant `PrimaryButton` dans `app.js`

```js
  // app.js
import PrimaryButton from "./PrimaryButton";

// Rendu dans le DOM
// Tous les composants commencent par une majuscule
function App() {
  return (
    <div>
      <PrimaryButton/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

## 6 - Ajouter une tâche à notre liste de tâches

### Instructions

Modifier le code :

- Créer un bouton qui ajoute la tâche "Nouvelle tâche" à la liste des tâches lorsque l'on clique dessus.

### Comment modifier un state de type tableau ?

```js

function listeDeCourses() {
  const [products, setProducts] = React.useState([
    'Poulet',
    'Fermier',
    'Super zouz',
  ]);
  return (
    <div>
      {products.map(product => <p>{product}</p>)}
      <button onClick={addProduct}>Ajouter un produit</button>
    </div>
  )

  /**
   * Cette fonction ajoute un nouvel article à la liste des articles.
   */
  function addProduct() {
    //⚠️ Attention, ceci est la seule façon de modifier un state tableau !
    // Lire le code : "Modifier products". 
    // "Nouvelle valeur : Une copie du tableau products actuel + un élément "Nouvel Article"
    setProducts([...products, 'Nouvel article.'])
  }
}

```

## 7 - Créer un formulaire pour ajouter une nouvelle tâche


## Comment pratiquer ?

Bonjour !
Voici quelques commandes utiles tout au long de votre aventure !

- Cloner le projet sur votre ordinateur (inutile de le faire plusieurs
  fois)`git clone https://github.com/MaximePie/ReactCourseTaskManager.git`
- Mettre à jour le projet sur votre ordinateur : `git fetch`
- Démarrer le projet : Ouvrir le fichier `index.html` dans un navigateur
- Charger le code d'une vidéo en particulier :
    - `git checkout <id du commit>`
        - Exemple : `git checkout edb468a6c474f3b1dfed885f4b71cb52c86753bb` charge le tout premier commit
        - Plus d'informations ici : https://devopscube.com/checkout-clone-specific-git-commit-id-sha/

### Trouver le commit

1.

![image](https://user-images.githubusercontent.com/16031936/165256254-bfab5051-f7fe-4b22-8484-0827a670d66c.png)

2.

![image](https://user-images.githubusercontent.com/16031936/165256327-6e083399-32e0-4bc9-bd41-7125ff14e751.png)

