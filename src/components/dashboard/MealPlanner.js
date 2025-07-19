import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { generateMealPlan } from '../../services/aiService';
import { FaHeart, FaUtensils, FaFire } from 'react-icons/fa';

export default function MealPlanner() {
  const { currentUser } = useAuth();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [culture, setCulture] = useState('indian');
  
  useEffect(() => {
    const fetchMealPlan = async () => {
      if (!currentUser) return;
      
      try {
        setLoading(true);
        const mealPlan = await generateMealPlan({
          culture,
          condition: 'diabetes',
          calories: 1800
        });
        setMeals(mealPlan);
      } catch (error) {
        console.error('Error fetching meal plan:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMealPlan();
  }, [currentUser, culture]);

  return (
    <div>
      <div className="flex mb-6">
        <button 
          onClick={() => setCulture('indian')}
          className={`flex-1 py-2 px-4 rounded-l-lg ${
            culture === 'indian' 
              ? 'bg-orange-500 text-white' 
              : 'bg-gray-200'
          }`}
        >
          Indian Cuisine
        </button>
        <button 
          onClick={() => setCulture('israeli')}
          className={`flex-1 py-2 px-4 rounded-r-lg ${
            culture === 'israeli' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200'
          }`}
        >
          Israeli Cuisine
        </button>
      </div>
      
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2">Generating your personalized meal plan...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {meals.map((meal, index) => (
            <div key={index} className="meal-card bg-white border rounded-lg overflow-hidden shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-32" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{meal.name}</h3>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <FaFire className="mr-1 text-orange-500" />
                  <span>{meal.calories} calories</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <FaHeart className="mr-1 text-red-500" />
                  <span>GI: {meal.gi}</span>
                </div>
                <p className="mt-2 text-sm">{meal.description}</p>
                <div className="mt-3 flex justify-between">
                  <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    View Recipe
                  </button>
                  <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Add to Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 text-center">
        <button 
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Generate New Plan
        </button>
      </div>
    </div>
  );
}