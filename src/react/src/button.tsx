import React from 'react';
import { capitalize } from '../../core/';

export const Button = ({ label }: { label: string }) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 flex items-center gap-2"
    >
      <svg width="20" height="20" fill="currentColor" className="inline-block">
        <circle cx="10" cy="10" r="8" />
      </svg>
      {capitalize(label)}
    </button>
  );
};