import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { app } from '../services/firebase';

const auth = getAuth(app);

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

import { flags } from '../assets';

function CulturalSelector() {
  return (
    <div>
      <h3>Select Cultural Preference:</h3>
      <div className="flex justify-center gap-8 my-4">
        <flags.IndianFlag />
        <flags.IsraeliFlag />
      </div>
    </div>
  );
}

import { icons } from '../assets';

function FeatureCard() {
  return (
    <div className="flex items-center">
      <icons.HealthIcon className="mr-2" />
      <span>Health Tracking</span>
    </div>
  );
}