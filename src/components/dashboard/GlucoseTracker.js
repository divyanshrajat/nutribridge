import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export default function GlucoseTracker() {
  const [glucoseData, setGlucoseData] = useState({
    labels: [],
    datasets: [{
      label: 'Blood Glucose (mg/dL)',
      data: [],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.3,
      fill: true
    }]
  });
  
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    // Simulated initial data
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = [128, 135, 142, 130, 125, 118, 122];
    
    setGlucoseData({
      labels,
      datasets: [{
        ...glucoseData.datasets[0],
        data
      }]
    });
  }, []);

  const handleAddReading = () => {
    if (!glucoseLevel) return;
    
    const newLevel = parseInt(glucoseLevel);
    if (isNaN(newLevel)) return;
    
    const newLabels = [...glucoseData.labels, new Date().toLocaleDateString('en-US', { weekday: 'short' })];
    const newData = [...glucoseData.datasets[0].data, newLevel];
    
    setGlucoseData({
      labels: newLabels,
      datasets: [{
        ...glucoseData.datasets[0],
        data: newData
      }]
    });
    
    setGlucoseLevel('');
    setNotes('');
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y} mg/dL`
        }
      }
    },
    scales: {
      y: {
        min: 80,
        max: 200,
        title: {
          display: true,
          text: 'mg/dL'
        }
      }
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="h-80">
            <Line data={glucoseData} options={chartOptions} />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Add New Reading</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Glucose Level (mg/dL)
              </label>
              <input
                type="number"
                value={glucoseLevel}
                onChange={(e) => setGlucoseLevel(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your reading"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes (optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="2"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Before/after meal, time of day, etc."
              />
            </div>
            
            <button
              onClick={handleAddReading}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Add Reading
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-md">
            <h4 className="font-medium mb-2">Glucose Level Guide</h4>
            <ul className="text-sm space-y-1">
              <li>Normal fasting: 70-100 mg/dL</li>
              <li>Pre-diabetes: 100-125 mg/dL</li>
              <li>Diabetes: 126+ mg/dL</li>
              <li>Target after meals: &lt;180 mg/dL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}