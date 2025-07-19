import React, { useContext } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import MealPlanner from './MealPlanner';
import VoiceAssistant from './VoiceAssistant';
import GlucoseTracker from './GlucoseTracker';
import LanguageSelector from '../ui/LanguageSelector';

export default function Dashboard() {
  const { currentUser } = useAuth();
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">NutriBridge Dashboard</h1>
        <LanguageSelector />
      </div>
      
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-xl text-white shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-2">Welcome, {currentUser?.email}</h2>
        <p>Your personalized nutrition journey starts here. Track meals, monitor glucose, and get AI-powered advice.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Cultural Meal Planner</h2>
          <MealPlanner />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Voice Nutritionist</h2>
          <VoiceAssistant />
        </div>
        
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Health Tracker</h2>
          <GlucoseTracker />
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>NutriBridge - Bridging Israeli precision and Indian scalability for better health</p>
      </div>
    </div>
  );
}