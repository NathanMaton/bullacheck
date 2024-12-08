import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface AppRank {
  name: string;
  rank: number;
  previousRank: number;
  category: string;
  isCrypto: boolean;
}

const apps: AppRank[] = [
  { name: 'TikTok', rank: 1, previousRank: 1, category: 'Social', isCrypto: false },
  { name: 'Instagram', rank: 2, previousRank: 2, category: 'Social', isCrypto: false },
  { name: 'Coinbase', rank: 8, previousRank: 15, category: 'Finance', isCrypto: true },
  { name: 'Robinhood', rank: 12, previousRank: 18, category: 'Finance', isCrypto: true },
];

export function AppRankings() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Top App Rankings</h2>
      <div className="space-y-4">
        {apps.map((app) => (
          <div
            key={app.name}
            className={`flex items-center justify-between p-3 rounded-lg ${
              app.isCrypto ? 'bg-blue-50' : 'bg-gray-50'
            }`}
          >
            <div>
              <h3 className="font-medium">{app.name}</h3>
              <p className="text-sm text-gray-600">{app.category}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">#{app.rank}</span>
              {app.rank < app.previousRank ? (
                <div className="flex items-center text-green-600">
                  <ArrowUp size={16} />
                  <span className="text-sm">+{app.previousRank - app.rank}</span>
                </div>
              ) : app.rank > app.previousRank ? (
                <div className="flex items-center text-red-600">
                  <ArrowDown size={16} />
                  <span className="text-sm">-{app.rank - app.previousRank}</span>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}