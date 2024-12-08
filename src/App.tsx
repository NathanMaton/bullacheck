import React from 'react';
import { TradingViewWidget } from './components/TradingViewWidget';
import { AppRankings } from './components/AppRankings';
import { MarketSentiment } from './components/MarketSentiment';
import { LineChart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <LineChart className="text-blue-600" size={24} />
              <span className="ml-2 text-xl font-semibold">Crypto Bull Run Tracker</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <MarketSentiment fearGreedIndex={75} lastUpdated="2024-03-14 12:00 UTC" />
          <AppRankings />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Bitcoin Dominance</h2>
          <TradingViewWidget />
        </div>
      </main>
    </div>
  );
}

export default App;