import React, { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaStopCircle } from 'react-icons/fa';
import { handleVoiceQuery } from '../../services/aiService';
import { startSpeechRecognition } from '../../services/speechService';

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef(null);

  const handleStartListening = () => {
    setQuery('');
    setResponse('');
    setIsListening(true);
    
    startSpeechRecognition(language, (transcript) => {
      setQuery(transcript);
      setIsListening(false);
    }, () => {
      setIsListening(false);
    });
  };

  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    try {
      setLoading(true);
      const answer = await handleVoiceQuery(query, language);
      setResponse(answer);
    } catch (error) {
      setResponse('Error processing your query. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Language
        </label>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="he">Hebrew</option>
        </select>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-center mb-4">
          <button
            onClick={isListening ? handleStopListening : handleStartListening}
            className={`flex items-center justify-center w-16 h-16 rounded-full ${
              isListening 
                ? 'bg-red-500 animate-pulse' 
                : 'bg-blue-500'
            } text-white shadow-lg transition`}
          >
            {isListening ? <FaStopCircle size={24} /> : <FaMicrophone size={24} />}
          </button>
        </div>
        <p className="text-center text-sm text-gray-600">
          {isListening 
            ? 'Listening... Speak now' 
            : 'Click the microphone to ask a nutrition question'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Or type your nutrition question here..."
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Get Nutrition Advice'}
        </button>
      </form>
      
      {response && (
        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <h3 className="font-bold text-lg mb-2">Nutritionist Response:</h3>
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}