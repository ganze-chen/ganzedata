import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { AlertTriangle, DollarSign, Shield } from 'lucide-react';

const DefenseSectorCrisisSlide = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showJet, setShowJet] = useState(false);
  const [showDependency, setShowDependency] = useState(false);
  const [showCosts, setShowCosts] = useState(false);
  const [showExemption, setShowExemption] = useState(false);

  // Dependency data
  const dependencyData = [
    { name: 'Chinese Processing', value: 72, color: '#D41131' },
    { name: 'Other Sources', value: 28, color: '#0065B0' },
  ];

  // Cost data
  const costData = [
    { name: 'Pre-Tariff', value: 143, fill: '#0065B0' },
    { name: 'Post-Tariff', value: 162, fill: '#D41131' },
  ];

  // Animation sequence
  useEffect(() => {
    const timeout1 = setTimeout(() => setShowTitle(true), 300);
    const timeout2 = setTimeout(() => setShowJet(true), 800);
    const timeout3 = setTimeout(() => setShowDependency(true), 1400);
    const timeout4 = setTimeout(() => setShowCosts(true), 2000);
    const timeout5 = setTimeout(() => setShowExemption(true), 2600);
    
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
    };
  }, []);

  // Animation style helper
  const fadeIn = (show) => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out'
  });

  // Pulse animation for alert elements
  const pulseStyle = {
    animation: 'pulse 2s infinite',
  };

  return (
    <div className="w-full h-screen bg-white p-10 flex flex-col" style={{ maxWidth: '1920px', maxHeight: '1080px' }}>
      {/* Alert Banner */}
      <div 
        className="mb-4 bg-red-100 p-3 rounded-lg flex items-center justify-center" 
        style={{ ...fadeIn(showTitle), ...pulseStyle }}
      >
        <AlertTriangle size={24} color="#D41131" className="mr-2" />
        <h1 className="text-3xl font-bold" style={{ color: '#D41131' }}>
          NATIONAL SECURITY ALERT: Defense Sector Crisis
        </h1>
      </div>

      <div className="flex flex-1 gap-6">
        {/* Left Column - F-22 and Dependency */}
        <div className="w-1/2 flex flex-col gap-4">
          {/* F-22 Fighter Jet Visual */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex-1 relative overflow-hidden"
            style={fadeIn(showJet)}
          >
            <h3 className="text-xl font-semibold mb-3">F-22 Fighter Jet Critical Components</h3>
            
            {/* Stylized F-22 Silhouette */}
            <div className="relative h-64 flex items-center justify-center">
              {/* Fighter jet silhouette */}
              <div className="w-4/5 h-32 relative">
                {/* Jet body */}
                <div className="absolute w-full h-16 bg-gray-800 top-8 rounded-lg" style={{ clipPath: 'polygon(0 50%, 15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%)' }}></div>
                {/* Wings */}
                <div className="absolute w-full h-6 bg-gray-700 top-13 left-0" style={{ clipPath: 'polygon(30% 0, 70% 0, 90% 100%, 10% 100%)' }}></div>
                {/* Cockpit */}
                <div className="absolute w-12 h-6 bg-blue-300 top-4 left-1/3 rounded-t-lg"></div>
                {/* Tail */}
                <div className="absolute w-8 h-12 bg-gray-700 top-0 right-10" style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 0)' }}></div>
                
                {/* Component highlight points - pulsing red dots */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-red-500"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${10 + Math.random() * 80}%`,
                      animation: 'pulse 1.5s infinite',
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-2">
              <p className="text-lg font-semibold">Lockheed Martin's Advanced Air Superiority Fighter</p>
              <p className="text-gray-600">Crucial platform for U.S. air defense capabilities</p>
            </div>
          </div>

          {/* Titanium Dependency */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            style={fadeIn(showDependency)}
          >
            <h3 className="text-xl font-semibold mb-4">Titanium Alloy Component Dependency</h3>
            
            <div className="flex items-center">
              <div className="w-1/2">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={dependencyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {dependencyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="w-1/2 p-4">
                <div className="text-center">
                  <div className="text-4xl font-bold" style={{ color: '#D41131' }}>72%</div>
                  <p className="text-lg mt-2">of F-22 titanium components rely on <span className="font-semibold">Chinese processing</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Cost Impact and Exemption */}
        <div className="w-1/2 flex flex-col gap-4">
          {/* Cost Impact */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex-1"
            style={fadeIn(showCosts)}
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign size={28} color="#D41131" />
              <h3 className="text-xl font-semibold">Tariff Cost Impact Per Aircraft</h3>
            </div>
            
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={costData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 180]} />
                <Tooltip formatter={(value) => [`$${value} million`, 'Unit Cost']} />
                <Bar dataKey="value" name="Cost ($ millions)" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-4 flex items-center justify-center">
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <div className="text-3xl font-bold" style={{ color: '#D41131' }}>+$19 Million</div>
                <p className="text-lg mt-1">per unit cost increase</p>
                <p className="text-gray-700 mt-1">Direct result of tariff policy on critical components</p>
              </div>
            </div>
          </div>

          {/* Congressional Exemption */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            style={fadeIn(showExemption)}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield size={28} color="#0065B0" />
              <h3 className="text-xl font-semibold">Congressional Emergency Response</h3>
            </div>
            
            <div className="p-4 border-2 border-blue-300 rounded-lg bg-blue-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-100 px-4 py-1 rounded-full border border-blue-300">
                <span className="font-bold text-blue-800">OFFICIAL</span>
              </div>
              
              <div className="mt-2 text-center">
                <h4 className="text-xl font-bold mb-2" style={{ color: '#0065B0' }}>Special Security Exemption</h4>
                <p className="text-lg font-medium">"China Technology Dependence Exemptions"</p>
                <p className="mt-3 text-gray-700">Congress forced to create special provisions to maintain national defense capabilities despite tariff policy</p>
              </div>
              
              <div className="mt-4 flex justify-center">
                <div className="inline-block border border-gray-300 px-6 py-2 rounded bg-white text-center">
                  <p className="font-medium">Issued under National Security Presidential Memorandum</p>
                  <p className="text-sm text-gray-600">Acknowledging critical defense supply chain vulnerabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add keyframes for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default DefenseSectorCrisisSlide;