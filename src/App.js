import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 0, name: 'Max', age: 28 },
      { id: 1, name: 'Manu', age: 29 },
      { id: 2, name: 'Michael', age: 27 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  const [showPersonsState, setShowPersonsState] = useState(false);

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons
    });
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({persons});
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState;
    setShowPersonsState(!doesShow);
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (showPersonsState) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person 
                  click={deletePersonHandler.bind(this, index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => nameChangedHandler(event, person.id)} />
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
        style={style}
        onClick={togglePersonsHandler.bind(this, 'Maximilian')}>Toggle Persons</button>
      {persons}
    </div>
  );
};

export default App;