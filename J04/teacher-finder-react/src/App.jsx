import Counter from './Counter.jsx';
import Form from './Form.jsx';
import List from './List.jsx';

const App = () => {
  const state = {
    selectedLangage: "javascript",
    selectedSpecialty: "react",
    trainers: [
      {
        name: 'Benjamin B.',
        language: 'PHP',
        specialty: 'Symfony',
      },
      {
        name: 'Benjamin N.',
        language: 'JavaScript',
        specialty: 'Data',
      },
      {
        name: 'Benoit',
        language: 'JavaScript',
        specialty: 'Data',
      },
      {
        name: 'Cécile',
        language: 'PHP',
        specialty: 'React',
      },
      {
        name: 'Fabien',
        language: 'JavaScript',
        specialty: 'React',
      },
      {
        name: 'Jean-Baptiste',
        language: 'PHP',
        specialty: 'Symfony',
      },
      {
        name: 'Jean-Christophe',
        language: 'PHP',
        specialty: 'Symfony',
      },
      {
        name: 'Luko',
        language: 'JavaScript',
        specialty: 'React',
      },
      {
        name: 'Quentin',
        language: 'JavaScript',
        specialty: 'React',
      },
      {
        name: 'Solène',
        language: 'PHP',
        specialty: 'React',
      },
      {
        name: 'Yann',
        language: 'JavaScript',
        specialty: 'Data',
      },
    ],
  }

  // Dans le return, on met le JSX.
  return (
    <>
      <Form />
      <Counter trainers={state.trainers} />
      {/* C'est l'équivalent d'écrire: */}
      {/* {Counter({ state: state, fruit: 'fruit', legume: 'Carotte' })} */}
      <List trainers={state.trainers} />
    </>
  )
}

export default App;