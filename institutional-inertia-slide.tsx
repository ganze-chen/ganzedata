import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Clock, TrendingUp, Globe, Repeat, Vote } from 'lucide-react';

const InstitutionalInertiaPolicies = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showInertia, setShowInertia] = useState(false);
  const [showColdWar, setShowColdWar] = useState(false);
  const [showEvolution, setShowEvolution] = useState(false);

  // Data for trade evolution chart
  const tradeEvolutionData = [
    { year: 1945, tradeVolume: 10, institutionalCost: 90 },
    { year: 1955, tradeVolume: 15, institutionalCost: 85 },
    { year: 1965, tradeVolume: 25, institutionalCost: 75 },
    { year: 1975, tradeVolume: 35, institutionalCost: 65 },
    { year: 1985, tradeVolume: 45, institutionalCost: 55 },
    { year: 1995, tradeVolume: 60, institutionalCost: 40 },
    { year: 2005, tradeVolume: 80, institutionalCost: 20 },
    { year: 2015, tradeVolume: 95, institutionalCost: 10 },
    { year: 2025, tradeVolume: 90, institutionalCost: 25 },
  ];

  // Animation sequence
  useEffect(() => {
    const timeout1 = setTimeout(() => setShowTitle(true), 300);
    const timeout2 = setTimeout(() => setShowInertia(true), 800);
    const timeout3 = setTimeout(() => setShowColdWar(true), 1300);
    const timeout4 = setTimeout(() => setShowEvolution(true), 1800);
    
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
          Institutional Inertia & Global Trade Evolution
        </h1>
        <h2 className="text-2xl font-semibold" style={{ color: '#D41131' }}>
          Why Failed Policies Return & How Global Markets Transformed
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 gap-6">
        {/* Left Column - Institutional Inertia */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* Institutional Inertia Cycle */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col h-full" 
            style={fadeIn(showInertia)}
          >
            <div className="flex items-center gap-3 mb-4">
              <Repeat size={28} color="#D41131" />
              <h3 className="text-xl font-semibold">Neo-Institutionalism Explanation</h3>
            </div>
            
            <div className="flex-1 relative">
              {/* Policy Cycle Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Outer circle - long-term economic laws */}
                  <div className="absolute inset-0 rounded-full border-4 border-dashed" style={{ borderColor: '#0065B0' }}></div>
                  
                  {/* Inner circle - short-term political cycle */}
                  <div className="absolute inset-8 rounded-full border-4" style={{ borderColor: '#D41131' }}></div>
                  
                  {/* Center text */}
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                      <div className="text-lg font-semibold" style={{ color: '#D41131' }}>Institutional</div>
                      <div className="text-lg font-semibold" style={{ color: '#D41131' }}>Inertia</div>
                    </div>
                  </div>
                  
                  {/* Elements around the circle */}
                  <div className="absolute" style={{ top: '-30px', left: '50%', transform: 'translateX(-50%)' }}>
                    <div className="bg-white p-2 rounded-lg shadow-md text-center">
                      <Clock size={20} className="inline-block mr-1" color="#D41131" />
                      <span className="text-sm font-medium">Political Cycle</span>
                    </div>
                  </div>
                  
                  <div className="absolute" style={{ bottom: '-30px', left: '50%', transform: 'translateX(-50%)' }}>
                    <div className="bg-white p-2 rounded-lg shadow-md text-center">
                      <Vote size={20} className="inline-block mr-1" color="#D41131" />
                      <span className="text-sm font-medium">Electoral Pressure</span>
                    </div>
                  </div>
                  
                  <div className="absolute" style={{ left: '-80px', top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="bg-white p-2 rounded-lg shadow-md text-center">
                      <span className="text-sm font-medium">Populist Demands</span>
                    </div>
                  </div>
                  
                  <div className="absolute" style={{ right: '-90px', top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="bg-white p-2 rounded-lg shadow-md text-center">
                      <span className="text-sm font-medium">Short-term "Wins"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 p-4 bg-red-50 rounded border-l-4" style={{ borderColor: '#D41131' }}>
              <p className="text-gray-700">
                Political systems favor short-term visible "achievements" over adherence to long-term economic principles, explaining why failed trade policies often return despite historical lessons.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Cold War to Global Trade */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* Cold War Division */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md" 
            style={fadeIn(showColdWar)}
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe size={28} color="#0065B0" />
              <h3 className="text-xl font-semibold">Post-WWII Global Division</h3>
            </div>
            
            <div className="flex justify-between items-center h-32">
              <div className="w-1/3 h-full flex flex-col items-center justify-center p-2">
                <div className="text-lg font-semibold mb-2" style={{ color: '#D41131' }}>One Wall</div>
                <div className="w-full h-16 bg-gray-300 flex items-center justify-center">
                  <div className="text-sm text-center">Berlin Wall</div>
                </div>
              </div>
              
              <div className="w-1/3 h-full flex flex-col items-center justify-center p-2">
                <div className="text-lg font-semibold mb-2" style={{ color: '#D41131' }}>Two Systems</div>
                <div className="flex w-full h-16">
                  <div className="w-1/2 bg-red-200 flex items-center justify-center">
                    <div className="text-xs text-center">Communist</div>
                  </div>
                  <div className="w-1/2 bg-blue-200 flex items-center justify-center">
                    <div className="text-xs text-center">Capitalist</div>
                  </div>
                </div>
              </div>
              
              <div className="w-1/3 h-full flex flex-col items-center justify-center p-2">
                <div className="text-lg font-semibold mb-2" style={{ color: '#D41131' }}>Three Worlds</div>
                <div className="flex w-full h-16">
                  <div className="w-1/3 bg-blue-200 flex items-center justify-center">
                    <div className="text-xs text-center">First</div>
                  </div>
                  <div className="w-1/3 bg-red-200 flex items-center justify-center">
                    <div className="text-xs text-center">Second</div>
                  </div>
                  <div className="w-1/3 bg-green-200 flex items-center justify-center">
                    <div className="text-xs text-center">Third</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trade Evolution */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex-1" 
            style={fadeIn(showEvolution)}
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={28} color="#0065B0" />
              <h3 className="text-xl font-semibold">Global Trade Evolution</h3>
            </div>
            
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart
                data={tradeEvolutionData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="tradeVolume" 
                  name="Global Trade Volume" 
                  stackId="1" 
                  stroke="#0065B0" 
                  fill="#0065B0" 
                />
                <Area 
                  type="monotone" 
                  dataKey="institutionalCost" 
                  name="Institutional Transaction Costs" 
                  stackId="2" 
                  stroke="#D41131" 
                  fill="#D41131" 
                />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="flex justify-between mt-4 text-sm">
              <div className="text-center">
                <div className="font-semibold">GATT</div>
                <div className="text-xs">Commodity Trade</div>
              </div>
              <div className="text-center relative">
                <div className="absolute h-6 border-l border-gray-400 -top-6 left-1/2"></div>
                <div className="font-semibold">End of Cold War</div>
                <div className="text-xs">Market Unification</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">WTO</div>
                <div className="text-xs">Investment & Trade</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">Globalization</div>
                <div className="text-xs">Factor Mobility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionalInertiaPolicies;