import React from 'react';

export default function Badge({ text, color = '#9ca3af' }) {
  const style = {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: 9999,
    fontSize: 12,
    fontWeight: 600,
    backgroundColor: color,
    color: '#ffffff',
    lineHeight: 1,
    verticalAlign: 'middle'
  };

  return <span style={style}>{text}</span>;
}