import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  }

  return (
    <nav className="nav-gradient text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-xl font-bold">NutriBridge</div>
          </Link>
          
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <div className="flex items-center text-sm">
                  <FaUser className="mr-1" />
                  <span>{currentUser.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition"
                >
                  <FaSignOutAlt className="mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-3 py-1 rounded hover:bg-white/10 transition">
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}