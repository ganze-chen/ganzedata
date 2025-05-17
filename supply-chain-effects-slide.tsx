import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Factory, Tractor, DollarSign, TrendingDown, Users } from 'lucide-react';

const SupplyChainEffectsSlide = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showAgricultural, setShowAgricultural] = useState(false);
  const [showManufacturing, setShowManufacturing] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

  // Soybean import data
  const soybeanData = [
    { year: '2017', value: 100, fill: '#0065B0' },
    { year: '2024', value: 12, fill: '#D41131' },
  ];

  // Farmer income data
  const farmerIncomeData = [
    { year: '2017', value: 100, fill: '#0065B0' },
    { year: '2024', value: 58, fill: '#D41131' },
  ];

  // Manufacturing impact data
  const manufacturingData = [
    { name: 'Steel Price Increase', value: 23, fill: '#D41131', description: '23% price shield' },
    { name: 'Auto Industry Cost', value: 11, fill: '#D41131', description: '$11B annual costs' },
    { name: 'Jobs Lost (Chrysler)', value: 2.8, fill: '#D41131', description: '2,800 workers laid off' },
  ];

  // Animation sequence
  useEffect(() => {
    const timeout1 = setTimeout(() => setShowTitle(true), 300);
    const timeout2 = setTimeout(() => setShowAgricultural(true), 800);
    const timeout3 = setTimeout(() => setShowManufacturing(true), 1300);
    const timeout4 = setTimeout(() => setShowArrows(true), 1800);
    
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);

  // Animation style helper
  const fadeIn = (show) => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out'
  });

  return (
    <div className="w-full h-screen bg-white p-10 flex flex-col" style={{ maxWidth: '1920px', maxHeight: '1080px' }}>
      {/* Title Section */}
      <div className="mb-4" style={fadeIn(showTitle)}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#0065B0' }}>
          The Tariff Supply-Chain Butterfly Effect
        </h1>
        <h2 className="text-2xl font-semibold" style={{ color: '#D41131' }}>
          From Agricultural Crisis to Manufacturing Dilemma
        </h2>
      </div>

      <div className="flex flex-1 gap-8 relative">
        {/* Agricultural Impact - Left Column */}
        <div 
          className="w-1/2 flex flex-col gap-4" 
          style={fadeIn(showAgricultural)}
        >
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Tractor size={28} color="#D41131" />
              <h3 className="text-xl font-semibold">Agricultural Impact: Iowa Soybeans</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* China's Soybean Imports */}
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="text-lg font-medium mb-2">China's US Soybean Imports</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={soybeanData}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                    <Tooltip formatter={(value) => [`${value}%`, 'of 2017 levels']} />
                    <Bar dataKey="value" name="China Imports" fill="#0065B0" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-2">
                  <span className="font-bold text-xl" style={{ color: '#D41131' }}>88% Drop</span>
                </div>
              </div>
              
              {/* Farmer Income */}
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="text-lg font-medium mb-2">Iowa Farmers' Income</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={farmerIncomeData}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                    <Tooltip formatter={(value) => [`${value}%`, 'of 2017 levels']} />
                    <Bar dataKey="value" name="Farmer Income" fill="#0065B0" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-2">
                  <span className="font-bold text-xl" style={{ color: '#D41131' }}>42% Decline</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-red-50 rounded border-l-4" style={{ borderColor: '#D41131' }}>
              <p className="text-gray-700">
                <span className="font-semibold">Taxpayer Burden:</span> Farmers forced to accept government "trade relief" funds—essentially a public subsidy for flawed tariff policies
              </p>
            </div>
          </div>
        </div>

        {/* Connect arrows */}
        <div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
          style={{ 
            ...fadeIn(showArrows),
            width: '80px' 
          }}
        >
          <div className="text-center mb-2 font-semibold">Butterfly Effect</div>
          <div style={{ 
            height: '180px', 
            width: '4px', 
            background: 'linear-gradient(to bottom, #D41131, #0065B0)',
            position: 'relative'
          }}>
            <div className="absolute -left-3 top-1/4 w-10 h-4 bg-red-100" style={{ transform: 'rotate(45deg)' }}></div>
            <div className="absolute -right-3 top-2/4 w-10 h-4 bg-blue-100" style={{ transform: 'rotate(-45deg)' }}></div>
            <div className="absolute -left-3 top-3/4 w-10 h-4 bg-red-100" style={{ transform: 'rotate(45deg)' }}></div>
          </div>
        </div>
        
        {/* Manufacturing Impact - Right Column */}
        <div 
          className="w-1/2 flex flex-col gap-4" 
          style={fadeIn(showManufacturing)}
        >
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Factory size={28} color="#0065B0" />
              <h3 className="text-xl font-semibold">Manufacturing Cost Spiral</h3>
            </div>
            
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={manufacturingData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip formatter={(value, name, props) => [
                  props.payload.description,
                  props.payload.name
                ]} />
                <Bar dataKey="value" name="Impact" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <DollarSign size={24} color="#D41131" />
                </div>
                <div>
                  <h4 className="font-medium">Steel Tariffs Consequences</h4>
                  <p className="text-gray-700">23% price shield for domestic producers created ripple effects</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <Users size={24} color="#D41131" />
                </div>
                <div>
                  <h4 className="font-medium">Case Study: Chrysler Ohio Plant</h4>
                  <p className="text-gray-700">Rising costs forced closure, with 2,800 workers laid off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainEffectsSlide;