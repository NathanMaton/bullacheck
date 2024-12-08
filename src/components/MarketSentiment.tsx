import React from 'react';
import { Gauge } from 'lucide-react';

interface SentimentProps {
  fearGreedIndex: number;
  lastUpdated: string;
}

export function MarketSentiment({ fearGreedIndex, lastUpdated }: SentimentProps) {
  const getSentimentText = (index: number) => {
    if (index <= 20) return 'Extreme Fear';
    if (index <= 40) return 'Fear';
    if (index <= 60) return 'Neutral';
    if (index <= 80) return 'Greed';
    return 'Extreme Greed';
  };

  const getSentimentColor = (index: number) => {
    if (index <= 20) return 'text-red-600';
    if (index <= 40) return 'text-orange-500';
    if (index <= 60) return 'text-yellow-500';
    if (index <= 80) return 'text-green-500';
    return 'text-green-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Market Sentiment</h2>
        <Gauge className="text-blue-600" size={24} />
      </div>
      <div className="text-center">
        <div className={`text-4xl font-bold ${getSentimentColor(fearGreedIndex)}`}>
          {fearGreedIndex}
        </div>
        <div className={`text-lg font-medium mt-2 ${getSentimentColor(fearGreedIndex)}`}>
          {getSentimentText(fearGreedIndex)}
        </div>
        <div className="text-sm text-gray-600 mt-2">
          Last updated: {lastUpdated}
        </div>
      </div>
    </div>
  );
}