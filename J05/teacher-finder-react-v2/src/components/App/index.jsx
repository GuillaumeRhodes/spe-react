import { useState } from 'react';
import Counter from '../Counter';
import Form from '../Form';
import List from '../List';
import trainers from '../../datas/trainers';

const App = () => {
  // On déclare un nouveau state (selectedLanguage). À Chaque fois que le state va changer, TOUS (et SEULEMENT) les composants qui utilisent ce state vont être mis à jour.
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript')
  // On déclare un deuxième state (on peut en avoir autant que l'on veut).
  const [selectedSpecialty, setSelectedSpecialty] = useState('React')

  const filteredTrainers = trainers.filter(({ language, specialty }) => language === selectedLanguage && specialty === selectedSpecialty)
  // Dans le return, on met le JSX.
  return (
    <>
      <Form
        selectedLanguage={selectedLanguage}
        selectedSpecialty={selectedSpecialty}
        setSelectedLanguage={setSelectedLanguage}
        setSelectedSpecialty={setSelectedSpecialty}
      />
      <Counter nbOfTrainers={filteredTrainers.length} />
      {/* C'est l'équivalent d'écrire: */}
      {/* {Counter({ state: state, fruit: 'fruit', legume: 'Carotte' })} */}
      <List trainers={filteredTrainers} />
    </>
  )
}

export default App;
