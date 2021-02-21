import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.login);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
      btnClass = classes.Red;
  }

  if (props.persons.length < 3) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length < 2) {
    assignedClasses.push(classes.bold);
  }

  return(
      <div className={classes.Cockpit}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button ref={toggleBtnRef} className={btnClass} onClick={props.togglePersonsHandler}>
          Toggle Persons
          </button>
            {<button onClick={authContext.login}>Log In</button>}
      </div>
  );
}

export default Cockpit;