import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/add-employee';
import EditEmployee from './pages/edit-employee';
import { useState } from 'react';

function App() {

    const [employeeToEdit, setEmployeeToEdit] = useState([]);

   return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/api" exact>
            <Home setEmployeeToEdit={setEmployeeToEdit} />
          </Route>
          <Route path="/api/add-employee">
            <AddMovie />
          </Route>
          <Route path="/api/edit-employee">
            <EditMovie setEmployeeToEdit={setEmployeeToEdit} />
          </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;