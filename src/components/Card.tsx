// components/Card.tsx
import React from 'react';

interface CardProps {
  id: number;
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ id, title, content }) => {
  return (
    <div className="flex-none" style={{ width: '300px', marginRight: '16px' }}>
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default Card;
