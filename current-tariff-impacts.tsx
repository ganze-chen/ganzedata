import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingDown, Globe, DollarSign } from 'lucide-react';

const CurrentTariffImpacts = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showGDP, setShowGDP] = useState(false);
  const [showDiversification, setShowDiversification] = useState(false);

  // Productivity impact data
  const productivityData = [
    { name: 'United States', value: 0.37, fill: '#D41131' },
    { name: 'China', value: 0.12, fill: '#0065B0' },
  ];

  // Market diversification data (simplified representation)
  const diversificationData = [
    { name: 'Pre-Tariff China Exports to US', value: 40 },
    { name: 'Post-Tariff China Exports to US', value: 25 },
    { name: 'Post-Tariff China Exports to Other Markets', value: 15 },
  ];

  const COLORS = ['#0065B0', '#D41131', '#34A853'];

  // Animation sequence
  useEffect(() => {
    const timeout1 = setTimeout(() => setShowTitle(true), 300);
    const timeout2 = setTimeout(() => setShowComparison(true), 800);
    const timeout3 = setTimeout(() => setShowGDP(true), 1300);
    const timeout4 = setTimeout(() => setShowDiversification(true), 1800);
    
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
      <div className="mb-6" style={fadeIn(showTitle)}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#0065B0' }}>
          Current Tariff Policy Impacts
        </h1>
        <h2 className="text-2xl font-semibold" style={{ color: '#D41131' }}>
          Peterson Institute Report Findings (2025)
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 gap-6">
        {/* Left Column - Productivity Impact */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* Productivity Comparison */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col" 
            style={fadeIn(showComparison)}
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown size={28} color="#D41131" />
              <h3 className="text-xl font-semibold">Total Factor Productivity Loss</h3>
            </div>
            
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={productivityData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(tick) => `${tick}%`} domain={[0, 0.5]} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="value" name="Productivity Loss (%)" />
              </BarChart>
            </ResponsiveContainer>
            
            <p className="mt-4 text-gray-700">
              U.S. tariffs on China caused <span className="font-bold text-red-600">3x greater</span> productivity damage to the U.S. economy compared to China
            </p>
          </div>

          {/* GDP Impact */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md" 
            style={fadeIn(showGDP)}
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign size={28} color="#D41131" />
              <h3 className="text-xl font-semibold">Annual U.S. GDP Loss</h3>
            </div>
            
            <div className="relative h-48 w-full flex items-center justify-center">
              <div className="absolute text-9xl font-bold flex items-center justify-center" style={{ color: '#D41131' }}>
                $93B
              </div>
              <div className="absolute bottom-0 w-full text-center text-gray-700">
                Annual GDP reduction from tariff policies
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - China's Market Diversification */}
        <div 
          className="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md flex flex-col" 
          style={fadeIn(showDiversification)}
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe size={28} color="#0065B0" />
            <h3 className="text-xl font-semibold">China's Market Diversification</h3>
          </div>
          
          <p className="mb-6 text-gray-700">
            China limited its productivity loss to just <span className="font-bold text-blue-600">0.12%</span> through diversifying export markets away from the U.S.
          </p>
          
          <div className="flex-1 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={diversificationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {diversificationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-3 p-4 bg-blue-50 rounded border-l-4" style={{ borderColor: '#0065B0' }}>
            <p className="text-gray-700 font-medium">China's strategic shift to alternative export markets effectively mitigated the intended impact of U.S. tariff policies, demonstrating the limited effectiveness of unilateral trade barriers in globalized markets.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTariffImpacts;