import React from 'react';
import { capitalize } from '../../core/';

export const Button = ({ label }: { label: string }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      {capitalize(label)}
    </button>
  );
};