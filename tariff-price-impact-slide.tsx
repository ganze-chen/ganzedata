import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ShoppingCart, TrendingUp, AlertTriangle } from 'lucide-react';

const TariffPriceImpactSlide = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showPassthrough, setShowPassthrough] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  // Tariff passthrough data
  const passthroughData = [
    { name: 'Passed to Consumers', value: 92, color: '#D41131' },
    { name: 'Absorbed by Exporters', value: 8, color: '#0065B0' },
  ];

  // Product price increase data
  const productData = [
    { name: 'Walmart Shirts', increase: 37, fill: '#D41131' },
    { name: 'Amazon Smart Speakers', increase: 22, fill: '#D41131' },
  ];

  // Animation sequence
  useEffect(() => {
    const timeout1 = setTimeout(() => setShowTitle(true), 300);
    const timeout2 = setTimeout(() => setShowPassthrough(true), 800);
    const timeout3 = setTimeout(() => setShowProducts(true), 1300);
    const timeout4 = setTimeout(() => setShowQuote(true), 1800);
    
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
          Who Really Pays for Tariffs?
        </h1>
        <h2 className="text-2xl font-semibold" style={{ color: '#D41131' }}>
          Retail Price Impact vs. Political Messaging
        </h2>
      </div>

      <div className="flex flex-1 gap-6">
        {/* Left Column */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* Tariff Passthrough Visualization */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            style={fadeIn(showPassthrough)}
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={28} color="#D41131" />
              <h3 className="text-xl font-semibold">Tariff Cost Passthrough</h3>
            </div>
            
            <div className="flex items-center">
              <div className="w-2/5">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={passthroughData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {passthroughData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="w-3/5 pl-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">University of Michigan Study</h4>
                  <p className="text-gray-700 mb-3">
                    <span className="font-bold text-xl text-red-600">92%</span> of tariff costs were passed directly to U.S. consumers through higher retail prices
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#D41131' }}></div>
                      <p className="text-sm">Paid by U.S. Consumers</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#0065B0' }}></div>
                      <p className="text-sm">Absorbed by Exporters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Price Increases */}
          <div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex-1"
            style={fadeIn(showProducts)}
          >
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart size={28} color="#0065B0" />
              <h3 className="text-xl font-semibold">Retail Price Increases</h3>
            </div>
            
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={productData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(tick) => `${tick}%`} />
                <Tooltip formatter={(value) => [`${value}%`, 'Price Increase']} />
                <Bar dataKey="increase" name="Price Increase (%)" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold" style={{ color: '#D41131' }}>+37%</span>
                  </div>
                  <h4 className="font-medium">Walmart Shirts</h4>
                </div>
                <p className="text-sm text-gray-700">Everyday clothing items saw significant price jumps due to textile tariffs</p>
              </div>
              
              <div className="p-3 bg-white rounded shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold" style={{ color: '#D41131' }}>+22%</span>
                  </div>
                  <h4 className="font-medium">Smart Speakers</h4>
                </div>
                <p className="text-sm text-gray-700">Consumer electronics faced higher prices due to component tariffs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Claims vs. Reality */}
        <div 
          className="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md flex flex-col"
          style={fadeIn(showQuote)}
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={28} color="#D41131" />
            <h3 className="text-xl font-semibold">Political Claims vs. Reality</h3>
          </div>
          
          <div className="flex-1 flex flex-col">
            {/* The Claim */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6 relative">
              <div className="absolute -top-3 left-8 bg-blue-100 px-4 py-1 rounded-full">
                <span className="font-bold text-blue-800">THE CLAIM</span>
              </div>
              
              <div className="flex">
                <div className="flex-1">
                  <blockquote className="text-2xl italic font-medium text-gray-700 border-l-4 pl-4 border-blue-300">
                    "China will pay the tariffs"
                  </blockquote>
                  <p className="mt-3 text-right text-gray-600">— Trump Administration</p>
                </div>
              </div>
            </div>
            
            {/* The Reality */}
            <div className="bg-red-50 p-6 rounded-lg mb-6 relative flex-1">
              <div className="absolute -top-3 left-8 bg-red-100 px-4 py-1 rounded-full">
                <span className="font-bold text-red-800">THE REALITY</span>
              </div>
              
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-xl text-gray-700 mb-4">
                    American consumers directly paid <span className="font-bold">92%</span> of tariff costs through higher prices on everyday goods
                  </p>
                  
                  <div className="mt-4 p-4 bg-white rounded-lg shadow-inner flex items-center">
                    <div className="mr-4">
                      <ShoppingCart size={32} color="#D41131" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        A family spending $500/month on tariffed goods faced an additional <span className="font-bold">$110-$185 monthly cost</span> from price increases
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <blockquote className="text-xl italic font-medium text-gray-700 border-l-4 pl-4 border-red-300 mt-4">
                    "Voters began questioning whether 'America First' meant 'America Pays'"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffPriceImpactSlide;