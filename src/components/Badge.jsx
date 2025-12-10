import React from 'react';

export default function Badge({ text, color = '#9ca3af' }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold"
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
}