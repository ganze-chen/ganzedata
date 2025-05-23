import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingDown, AlertTriangle, BookOpen } from 'lucide-react';

const TariffSlide = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showMercantilism, setShowMercantilism] = useState(false);
  const [showRicardo, setShowRicardo] = useState(false);
  const [showSmootHawley, setShowSmootHawley] = useState(false);
  const [showStats, setShowStats] = useState(false);

  // Data for chart
  const impactData = [
    { name: 'U.S. Exports', value: -61, fill: '#D41131' },
    { name: 'Global Trade', value: -67, fill: '#0065B0' },
  ];

  // Animation sequence
  useEffect(() => {
    const timeout1 = setTimeout(() => setShowTitle(true), 300);
    const timeout2 = setTimeout(() => setShowMercantilism(true), 800);
    const timeout3 = setTimeout(() => setShowRicardo(true), 1300);
    const timeout4 = setTimeout(() => setShowSmootHawley(true), 1800);
    const timeout5 = setTimeout(() => setShowStats(true), 2300);
    
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

  return (
    <div className="w-full h-screen bg-white p-10 flex flex-col" style={{ maxWidth: '1920px', maxHeight: '1080px' }}>
      {/* Title Section */}
      <div className="mb-6" style={fadeIn(showTitle)}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#0065B0' }}>
          Trump's "Trade Deficit Harm Theory"
        </h1>
        <h2 className="text-2xl font-semibold" style={{ color: '#D41131' }}>
          Modern Mercantilism & Historical Parallels
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 gap-6">
        {/* Left Column - Key Concepts */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* Mercantilism Section */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex items-start gap-4" 
            style={fadeIn(showMercantilism)}
          >
            <div className="p-3 rounded-full bg-blue-100 flex items-center justify-center">
              <BookOpen size={28} color="#0065B0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Modern Mercantilism</h3>
              <p className="text-gray-700">Trump's trade theory echoes 17th-century mercantilism, prioritizing exports over imports and viewing trade deficits as economic losses rather than natural market outcomes.</p>
            </div>
          </div>

          {/* Ricardo Theory Section */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex items-start gap-4" 
            style={fadeIn(showRicardo)}
          >
            <div className="p-3 rounded-full bg-red-100 flex items-center justify-center">
              <BookOpen size={28} color="#D41131" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Comparative Advantage Theory</h3>
              <p className="text-gray-700">Ignores David Ricardo's economic principle that countries benefit by specializing in production where they have comparative advantage, even when running trade deficits.</p>
            </div>
          </div>
          
          {/* Manufacturing Focus */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex items-start gap-4" 
            style={fadeIn(showSmootHawley)}
          >
            <div className="p-3 rounded-full bg-blue-100 flex items-center justify-center">
              <AlertTriangle size={28} color="#0065B0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tariff-Based Manufacturing Revival</h3>
              <p className="text-gray-700">The strategy aimed to rebuild U.S. manufacturing through protective tariff barriers—similar to the approach of the 1930 Smoot-Hawley Tariff Act.</p>
            </div>
          </div>
        </div>

        {/* Right Column - Historical Impact */}
        <div 
          className="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md flex flex-col" 
          style={fadeIn(showStats)}
        >
          <h3 className="text-xl font-semibold mb-4">The Smoot-Hawley Tariff Act (1930) Impact</h3>
          <div className="flex items-center gap-2 mb-3">
            <DollarSign size={22} color="#D41131" />
            <p className="text-gray-700"><span className="font-semibold">Raised tariffs on 20,000 goods</span> to record high levels</p>
          </div>
          
          <div className="flex-1 mt-4">
            <h4 className="text-lg font-medium mb-3">Economic Consequences:</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={impactData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[-100, 0]} tickFormatter={(tick) => `${tick}%`} />
                <YAxis dataKey="name" type="category" />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="value" name="Percent Change" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-3 p-4 bg-red-50 rounded border-l-4" style={{ borderColor: '#D41131' }}>
            <p className="text-gray-700 font-medium">These dramatic declines in trade contributed to deepening the Great Depression, demonstrating the counterproductive nature of protectionist policies during economic downturns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffSlide;