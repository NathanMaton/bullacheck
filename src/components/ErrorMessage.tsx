import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function ErrorMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-red-600">
      <AlertTriangle size={32} className="mb-2" />
      <p>Failed to load chart. Please refresh the page.</p>
    </div>
  );
}