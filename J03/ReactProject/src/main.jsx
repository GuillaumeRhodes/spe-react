// import, c'est une méthode pour récupérer une information depuis un autre fichier.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

// ReactDOM c'est l'objet qui nous permet de charger l'application dans notre DOM (le index.html).
// Pour se faire, on utile la méthode createRoot, qui prend en argument l'élément dans lequel on va mettre l'application (dans notre cas, c'est la div avec l'id root).
// Cette même méthode nous donne accès à une autre méthode qui s'appelle render, render va s'occuper de charger le résultat, à render on donne en arguement l'application à charger (dans notre cas, App).
// On ignorera pous le moment le React.StrictMode (on le commente pour le moment).
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
)