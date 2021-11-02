import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar.component';
import CreateUsers from './components/create-user.component';
import CreateExercises from './components/create-exercise.component';
import EditExercises from './components/edit-exercise.component';
import ExercisesList from './components/exercises-list.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      
      <Route exact path='/' component={ExercisesList} />
      <Route path='/edit/:id' component={EditExercises} />
      <Route path='/create' component={CreateExercises} />
      <Route path='/user' component={CreateUsers} />
    </Router>
  );
}

export default App;
