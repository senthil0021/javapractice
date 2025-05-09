import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './component/Signup.jsx'
import Login from './component/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
