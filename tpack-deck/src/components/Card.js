import React from 'react';

const Card = ({ card, getBackgroundStyle, onClick }) => {
  return (
    <div
        className="w-[120px] h-[180px] p-4  m-2 flex justify-center rounded-xl items-center border p-2 shadow-sm hover:scale-105 cursor-pointer transition-transform"
        style={getBackgroundStyle(card.type)}
        onClick={() => onClick(card)}
    >
      <div className='text-center break-keep text-white font-bold text-lg'>{card.item}</div>
    </div>
  );
};

export default Card;
