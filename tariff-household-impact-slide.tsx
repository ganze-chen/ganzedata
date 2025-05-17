import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { DollarSign, TrendingUp, Home, Users } from 'lucide-react';

const TariffHouseholdImpactSlide = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showHouseholdImpact, setShowHouseholdImpact] = useState(false);
  const [showIncomeGroups, setShowIncomeGroups] = useState(false);
  const [showGiniCoefficient, setShowGiniCoefficient] = useState(false);

  // Income group impact data
  const incomeGroupData = [
    { name: 'Low-Income', value: 7.3, fill: '#D41131' },
    { name: 'High-Income', value: 2.1, fill: '#0065B0' },
  ];

  // Gini coefficient historical data
  const giniData = [
    { year: 1968, value: 0.39, annotation: 'Civil Rights Era' },
    { year: 1980, value: 0.40, annotation: '' },
    { year: 1990, value: 0.43, annotation: '' },
    { year: 2000, value: 0.44, annotation: '' },
    { year: 2010, value: 0.47, annotation: 'Post-Recession' },
    { year: 2020, value: 0.47, annotation: '' },
    { year: 2024, value: 0.48, annotation: 'Highest Since 1968' },
  ];

  // Animation sequence
  useEffect(() => {
    const timeout1 = setTimeout(() => setShowTitle(true), 300);
    const timeout2 = setTimeout(() => setShowHouseholdImpact(true), 800);
    const timeout3 = setTimeout(() => setShowIncomeGroups(true), 1300);
    const timeout4 = setTimeout(() => setShowGiniCoefficient(true), 1800);
    
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
          The Human Cost of Tariffs
        </h1>
        <h2 className="text-2xl font-semibold" style={{ color: '#D41131' }}>
          How Trade Policies Affect American Households
        </h2>
      </div>

      <div className="flex flex-1 gap-6">
        {/* Left Column */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* Household Impact Card */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            style={fadeIn(showHouseholdImpact)}
          >
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Home size={28} color="#0065B0" />
                  <h3 className="text-xl font-semibold">Annual Household Tariff Premium</h3>
                </div>
                
                <div className="relative h-64 flex items-center justify-center">
                  {/* House outline with dollar sign */}
                  <div className="relative w-64 h-48">
                    {/* House roof */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-blue-100" 
                      style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}>
                    </div>
                    
                    {/* House body */}
                    <div className="absolute top-24 left-10 w-44 h-24 bg-blue-100"></div>
                    
                    {/* Dollar amount */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <DollarSign size={32} color="#D41131" className="inline-block" />
                        <span className="text-4xl font-bold" style={{ color: '#D41131' }}>5,600</span>
                        <p className="mt-2 text-lg">per household annually</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-2 text-center">
                  <p className="text-gray-700">Federal Reserve data shows the average American family pays the equivalent of a monthly car payment in hidden tariff costs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Income Group Impact */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex-1"
            style={fadeIn(showIncomeGroups)}
          >
            <div className="flex items-center gap-3 mb-4">
              <Users size={28} color="#D41131" />
              <h3 className="text-xl font-semibold">Income Burden Disparity</h3>
            </div>
            
            <div className="flex items-center">
              <div className="w-1/2">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart
                    data={incomeGroupData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(tick) => `${tick}%`} />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip formatter={(value) => [`${value}% of income`, 'Tariff Burden']} />
                    <Bar dataKey="value" name="% of Income" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="w-1/2 pl-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">The "Regressive Tax" Effect</h4>
                  <p className="text-gray-700 mb-3">Low-income families pay <span className="font-bold text-red-600">3.5x more</span> of their income toward tariffs than wealthy households</p>
                  <div className="flex justify-center items-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: '#D41131' }}>7.3%</div>
                      <div className="text-sm">Low-Income</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: '#0065B0' }}>2.1%</div>
                      <div className="text-sm">High-Income</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Gini Coefficient */}
        <div 
          className="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md flex flex-col"
          style={fadeIn(showGiniCoefficient)}
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={28} color="#D41131" />
            <h3 className="text-xl font-semibold">Rising Inequality</h3>
          </div>
          
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={giniData}
                margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D41131" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#D41131" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[0.38, 0.50]} tickFormatter={(tick) => tick.toFixed(2)} />
                <Tooltip formatter={(value) => [value.toFixed(2), 'Gini Coefficient']} />
                <Area type="monotone" dataKey="value" stroke="#D41131" fillOpacity={1} fill="url(#colorUv)" />
                
                {/* Annotations for key years */}
                {giniData.map((entry, index) => (
                  entry.annotation ? (
                    <text
                      key={`annotation-${index}`}
                      x={(index / (giniData.length - 1)) * 100 + '%'}
                      y={350 - (entry.value - 0.38) * 1000 - 15}
                      textAnchor="middle"
                      fill="#D41131"
                      fontSize={10}
                      fontWeight="bold"
                    >
                      {entry.annotation}
                    </text>
                  ) : null
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">U.S. Gini Coefficient: 0.48</h4>
            <div className="flex items-start">
              <div className="w-1/2 pr-2">
                <p className="text-gray-700">Highest level of inequality since 1968, coinciding with tariff-driven price increases for essential goods</p>
              </div>
              <div className="w-1/2 pl-2 border-l border-gray-300">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#D41131' }}></div>
                  <p className="text-sm">Higher values = Greater inequality</p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#0065B0' }}></div>
                  <p className="text-sm">Comparable to developing economies</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-red-50 rounded border-l-4" style={{ borderColor: '#D41131' }}>
            <p className="text-gray-700">Tariff policy has created a "hidden tax" that disproportionately burdens everyday Americans, exacerbating economic inequality to levels unseen in generations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffHouseholdImpactSlide;