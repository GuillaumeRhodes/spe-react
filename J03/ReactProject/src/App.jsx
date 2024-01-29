import React from 'react';

// On va créer notre premier composant React. Un composant est simplement une fonction. Mais une fonction qui renvoit du "HTML".
const App = () => {
  const tableau = ["un", "deux", "trois"];

  return (
    // À l'instar de notre fonction configureElement (dans notre projet natif), on retrouve une fonction similaire avec React.
    // React.createElement(
    //   'div',
    //   { className: 'container' },
    //   ['Hello World']
    // )

    // Mais ce n'est pas la méthode la plus propre ni la plus simple, donc React nous donne à disposition un outil appelé, JSX.
    // Le JSX, c'est simplement une surcouche de JS. Il permet de faire tout ce que fait le JS, mais avec quelque chose en plus, comme par exemple le fait de pouvoir écrire directement du HTML (quelque de TRES similaire) dans nos fichiers .js (.jsx).
    <Container>
      <div className="container">Hello World</div>
      {/* On peut appeler nos composants sous forme de fonction. */}
      {/* {List()} */}
      {/* On peut plutôt, pour pas dénoter du reste du code (html/jsx), l'écrire sous forme de balise. */}
      {/* Pour rajouter des propriétés à mon composant, je vais tout simplement lui rajouter comme des attribues en html. */}
      <List numbers={tableau} />
    </Container>
  )
};

// Maintenant je vais créer un deuxième composant.
// Un composant peut recevoir des propriétés (properties/props). Ces propriétés vont être réunis sous un même objet reçu en paramètre de ma fonction (composant).
const List = (props) => {
  console.log("List", props)

  // Si j'écris une variable/expression dans des balises HTML, je dois l'encapsuler entre des accolades {}.
  // Si on écrit un tableau d'élément JSX, on doit rajouter un attribue qui s'appelle key, et qui doit être unique. Il agit comme un id, et est utilisé seulement par React, pour nous c'est transparant (on s'en sert pas).
  const result = props.numbers.map(element => <li key={element}>{element}</li>);

  // Je n'oublie pas de return mon result, qui est en fait mon html (un tableau de li)
  return <ul>{result}</ul>;
}

// Je crée un nouveau composant, qui sera simplement le container de mes autres composants dans App.
// La particularité de ce composant, c'est qu'il va contenir d'autres composants mais on ne sait pas encore ni combien ni lesquels.
// Pour ce faire, on va se servir de la propriété children qui est créée automatiquement lorsqu'on met des composants entre les balises (<Container>Des chose</Container).
const Container = props => {
  console.log("Container", props)
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

// L'export va permettre de pouvoir récupérer le composant/fonction depuis un autre fichier (dans notre cas, dans main.jsx).
// L'export permet de faire un import.
// On ne peut faire qu'un seul export default par fichier.
export default App;