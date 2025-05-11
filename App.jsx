import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Signup.jsx';
import Login from './component/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Protectedroute from './component/Protectedroute.jsx';
import Dashboard from './component/Dashboard.jsx';
import { AuthProvider } from './component/AuthContext.jsx';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route 
              path='/dashboard' 
              element={
                <Protectedroute>
                  <Dashboard />
                </Protectedroute>
              } 
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App;
