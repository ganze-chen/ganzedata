import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Globe, Factory, TrendingUp, DollarSign, Zap } from 'lucide-react';

const EconomicGlobalizationSlide = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showGlobalization, setShowGlobalization] = useState(false);
  const [showTariffs, setShowTariffs] = useState(false);
  const [showBoomerang, setShowBoomerang] = useState(false);
  
  // Animation sequence
  useEffect(() => {
    const timeout1 = setTimeout(() => setShowTitle(true), 300);
    const timeout2 = setTimeout(() => setShowGlobalization(true), 800);
    const timeout3 = setTimeout(() => setShowTariffs(true), 1600);
    const timeout4 = setTimeout(() => setShowBoomerang(true), 2400);
    
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
      <div className="mb-8" style={fadeIn(showTitle)}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#0065B0' }}>
          Economic Globalization vs. Tariff Policies
        </h1>
        <h2 className="text-2xl font-semibold" style={{ color: '#D41131' }}>
          The Boomerang Effect of Trade Restrictions
        </h2>
      </div>

      {/* Globalization Visualization */}
      <div 
        className="flex-1 mb-8 bg-gray-50 rounded-lg shadow-md p-6 relative overflow-hidden"
        style={fadeIn(showGlobalization)}
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Globe size={24} className="mr-2" color="#0065B0" />
          Global Distribution of Productive Forces
        </h3>
        
        <div className="flex justify-between items-center h-64 relative">
          {/* Globe in center */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
              <Globe size={64} color="#0065B0" />
            </div>
          </div>
          
          {/* Countries and industries flowing around the globe */}
          {/* Country 1 */}
          <div className="absolute left-0 top-1/4 w-40 text-center">
            <div className="p-2 bg-blue-50 rounded-lg shadow-sm mb-2">
              <Factory size={20} className="inline-block mr-1" />
              <span className="font-medium">Country A</span>
            </div>
            <div className="text-sm">Raw Materials</div>
            <ArrowRight className="absolute -right-6 top-1/2 transform -translate-y-1/2" color="#0065B0" />
          </div>
          
          {/* Country 2 */}
          <div className="absolute left-1/4 top-3/4 w-40 text-center">
            <div className="p-2 bg-blue-50 rounded-lg shadow-sm mb-2">
              <Factory size={20} className="inline-block mr-1" />
              <span className="font-medium">Country B</span>
            </div>
            <div className="text-sm">Component Manufacturing</div>
            <ArrowRight className="absolute -right-6 top-1/2 transform -translate-y-1/2" color="#0065B0" />
          </div>
          
          {/* Country 3 */}
          <div className="absolute right-1/4 top-1/4 w-40 text-center">
            <div className="p-2 bg-blue-50 rounded-lg shadow-sm mb-2">
              <Factory size={20} className="inline-block mr-1" />
              <span className="font-medium">Country C</span>
            </div>
            <div className="text-sm">Assembly & Integration</div>
            <ArrowRight className="absolute -right-6 top-1/2 transform -translate-y-1/2" color="#0065B0" />
          </div>
          
          {/* Country 4 */}
          <div className="absolute right-0 top-3/4 w-40 text-center">
            <div className="p-2 bg-blue-50 rounded-lg shadow-sm mb-2">
              <Factory size={20} className="inline-block mr-1" />
              <span className="font-medium">Country D</span>
            </div>
            <div className="text-sm">Final Products</div>
          </div>
          
          {/* Comparative Advantage Labels */}
          <div className="absolute left-1/3 top-0 transform -translate-x-1/2">
            <div className="p-2 bg-green-50 rounded-lg shadow-sm flex items-center">
              <TrendingUp size={18} className="mr-1" color="green" />
              <span className="text-sm font-medium">Cost Minimization</span>
            </div>
          </div>
          
          <div className="absolute right-1/3 top-0 transform translate-x-1/2">
            <div className="p-2 bg-green-50 rounded-lg shadow-sm flex items-center">
              <DollarSign size={18} className="mr-1" color="green" />
              <span className="text-sm font-medium">Benefit Maximization</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 px-6">
          <p className="text-gray-700">Industrial distribution crosses national boundaries, following comparative advantages rather than traditional vertical or horizontal divisions of labor</p>
        </div>
      </div>

      {/* Tariff Disruption Visualization */}
      <div className="flex gap-6 mb-6">
        {/* Tariff Barriers */}
        <div 
          className="w-1/2 bg-gray-50 rounded-lg shadow-md p-6"
          style={fadeIn(showTariffs)}
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#D41131' }}>
            Tariff Barriers vs. Economic Trend
          </h3>
          
          <div className="relative h-64 border-b-2 border-gray-300 flex justify-center">
            {/* Upward trend arrow */}
            <div className="absolute left-0 bottom-0 h-4/5 w-2/3 flex items-center">
              <div className="relative w-full h-1 bg-blue-400">
                <ArrowRight size={20} className="absolute right-0 top-1/2 transform -translate-y-1/2" color="#0065B0" />
                <div className="absolute -top-6 left-0 text-sm font-medium text-blue-600">Global Economic Integration</div>
              </div>
            </div>
            
            {/* Tariff wall */}
            <div className="absolute right-12 bottom-0 w-16 flex flex-col items-center">
              <div className="h-40 w-full bg-red-200 border-2 border-red-400 flex items-center justify-center">
                <div className="transform -rotate-90 whitespace-nowrap text-sm font-medium text-red-600">Tariff Barriers</div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-sm font-medium" style={{ color: '#D41131' }}>Trump</div>
                <div className="text-sm font-medium" style={{ color: '#D41131' }}>Administration</div>
              </div>
            </div>
            
            {/* Clash symbol */}
            <div className="absolute right-32 bottom-1/2 transform translate-y-1/2">
              <Zap size={36} color="#D41131" />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-700">Tariff policies run counter to the general trend of world economic development</p>
          </div>
        </div>
        
        {/* Boomerang Effect */}
        <div 
          className="w-1/2 bg-gray-50 rounded-lg shadow-md p-6 relative overflow-hidden"
          style={fadeIn(showBoomerang)}
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#D41131' }}>
            The Boomerang Effect
          </h3>
          
          <div className="relative h-64 flex justify-center items-center">
            {/* US icon */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xl font-bold" style={{ color: '#0065B0' }}>US</span>
              </div>
              <div className="text-sm font-medium">United States</div>
            </div>
            
            {/* Boomerang path animation */}
            <div className="absolute inset-0" style={{ 
              animation: showBoomerang ? 'boomerangPath 3s infinite' : 'none',
              backgroundImage: 'radial-gradient(circle at 20% 50%, transparent 66%, rgba(212, 17, 49, 0.2) 67%, rgba(212, 17, 49, 0.2) 68%, transparent 69%)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}></div>
            
            {/* Boomerang icon */}
            <div className="absolute" style={{ 
              left: '70%', 
              top: '50%', 
              transform: 'translateY(-50%)',
              animation: showBoomerang ? 'boomerangMove 3s infinite' : 'none'
            }}>
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center" style={{ color: '#D41131' }}>
                <span className="font-bold text-2xl" style={{ transform: 'rotate(45deg)' }}>↩</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-700">Eventually, the "boomerang" of the tariff war will return to hurt the United States itself</p>
          </div>
          
          <style jsx>{`
            @keyframes boomerangPath {
              0% { background-position: 0% 0%; }
              50% { background-position: 25% 0%; }
              100% { background-position: 0% 0%; }
            }
            @keyframes boomerangMove {
              0% { left: 20%; top: 50%; transform: translateY(-50%) rotate(0deg); }
              50% { left: 70%; top: 50%; transform: translateY(-50%) rotate(180deg); }
              100% { left: 20%; top: 50%; transform: translateY(-50%) rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default EconomicGlobalizationSlide;