// import React from 'react'
import ReactDOM from 'react-dom/client'
// Pour ce projet, j'ai choisi que le composant parent qui sera rendu sur le navigateur sera Recette. Par convention, on retrouvera souvent App, mais il ne faudra pas oublier que ce n'est qu'une convention.
// Si le chemin de mon import est celui d'un dossier, alors React va automatiquement chercher un fichier qui s'appelle index.
import Recipe from './components/Recipe';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Recipe />
  // </React.StrictMode>,
)