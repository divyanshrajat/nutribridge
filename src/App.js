import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/auth/PrivateRoute';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </div>
    </AuthProvider>
    
  );
}

export default App;
