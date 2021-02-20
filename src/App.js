import React, { useState } from 'react';
import classes from './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 0, name: 'Max', age: 28 },
      { id: 1, name: 'Manu', age: 29 },
      { id: 2, name: 'Michael', age: 27 }
    ]
  });

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

  let persons = null;
  let btnClass = '';

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

    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (personsState.persons.length < 3) {
    assignedClasses.push(classes.red);
  }
  if (personsState.persons.length < 2) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
};

export default App;