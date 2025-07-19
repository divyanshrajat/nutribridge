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

// Add to your App.js
import { flags } from './assets';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Add flags banner */}
        <div className="flag-container py-4 bg-white shadow-sm">
          <flags.IndianFlag />
          <div className="flex items-center justify-center">
            <div className="text-xl font-bold text-gray-800 mx-4">+</div>
          </div>
          <flags.IsraeliFlag />
        </div>
        
        <Navbar />
        {/* ... rest of your code */}
      </div>
    </AuthProvider>
  );
}