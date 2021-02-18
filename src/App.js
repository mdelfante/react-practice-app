import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Michael', age: 27 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  const [showPersonsState, setShowPersonsState] = useState(false);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Michael', age: 30 }
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value || 'Manu', age: 29 },
        { name: 'Michael', age: 27 }
      ]
    });
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
        <Person name={personsState.persons[0].name}
                age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} 
                age={personsState.persons[1].age}
                click={togglePersonsHandler.bind(this, 'Delf')}
                changed={nameChangedHandler}>My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} 
                age={personsState.persons[2].age} />
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