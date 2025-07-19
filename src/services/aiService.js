import axios from 'axios';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// Simulated food databases
const INDIAN_FOODS = [
  {
    name: "Besan Chilla",
    description: "Savory pancake made from chickpea flour, filled with vegetables",
    calories: 320,
    gi: 35,
    ingredients: ["Chickpea flour", "Onion", "Tomato", "Spinach", "Spices"]
  },
  {
    name: "Lauki Sabzi",
    description: "Bottle gourd cooked with Indian spices",
    calories: 150,
    gi: 30,
    ingredients: ["Bottle gourd", "Onion", "Tomato", "Turmeric", "Cumin"]
  },
  {
    name: "Moong Dal Khichdi",
    description: "Comforting rice and lentil porridge with vegetables",
    calories: 280,
    gi: 40,
    ingredients: ["Rice", "Moong dal", "Carrots", "Peas", "Ghee"]
  }
];

const ISRAELI_FOODS = [
  {
    name: "Shakshuka",
    description: "Poached eggs in tomato sauce with peppers and onions",
    calories: 290,
    gi: 28,
    ingredients: ["Eggs", "Tomatoes", "Bell peppers", "Onion", "Paprika"]
  },
  {
    name: "Sabich Bowl",
    description: "Grilled eggplant with hummus, salad, and tahini",
    calories: 310,
    gi: 32,
    ingredients: ["Eggplant", "Hummus", "Cucumber", "Tomato", "Tahini"]
  },
  {
    name: "Mediterranean Salad",
    description: "Fresh salad with feta, olives, and lemon dressing",
    calories: 220,
    gi: 25,
    ingredients: ["Cucumber", "Tomato", "Feta cheese", "Olives", "Lemon"]
  }
];

export const generateMealPlan = async ({ culture, condition, calories }) => {
  // In a real implementation, this would call the OpenAI API
  // For demo purposes, we'll simulate a delay and return mock data
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(culture === 'indian' ? INDIAN_FOODS : ISRAELI_FOODS);
    }, 1500);
  });
};

export const handleVoiceQuery = async (query, language) => {
  // Simulate API call to OpenAI
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = {
        en: "For your blood sugar level of 140, I recommend having a small portion of mango (about 50g) with some protein like almonds to balance the glycemic response.",
        hi: "आपका ब्लड शुगर 140 है, आप 50 ग्राम आम के साथ 10 बादाम खा सकते हैं। प्रोटीन के साथ फल खाने से ग्लाइसेमिक प्रतिक्रिया संतुलित रहती है।",
        he: "עבור רמת הסוכר בדם של 140, אני ממליץ לאכול מנת מנגו קטנה (כ-50 גרם) עם מעט חלבון כמו שקדים כדי לאזן את התגובה הגליקמית."
      };
      resolve(responses[language] || responses.en);
    }, 1000);
  });
};