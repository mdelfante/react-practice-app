import React, { useState } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 0, name: 'Max', age: 28 },
      { id: 1, name: 'Manu', age: 29 },
      { id: 2, name: 'Michael', age: 27 }
    ]
  });
  const [showPersonsState, setShowPersonsState] = useState(false);
  const [authenticatedState, setAuthenticatedState] = useState(false);

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

  const loginHandler = () => {
    setAuthenticatedState(true);
  };

  let persons = null;

  if (showPersonsState) {
    persons = <Persons 
        persons={personsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}
        isAuthenticated={authenticatedState} />;
  }

  return (
    <React.Fragment>
      <AuthContext.Provider value={{
        authenticated: authenticatedState,
        login: loginHandler
      }}>
        <Cockpit 
          showPersons={showPersonsState}
          persons={personsState.persons}
          togglePersonsHandler={togglePersonsHandler} />
        {persons}
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default withClass(App, classes.App);