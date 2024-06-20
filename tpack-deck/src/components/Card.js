import React from 'react';

const Card = ({ card, getBackgroundStyle, onClick, isSelected }) => {
  return (
    <div
        className={`w-[120px] h-[180px] p-4  m-2 flex justify-center rounded-xl items-center border shadow-sm hover:scale-105 cursor-pointer transition-transform ${isSelected ? 'border-4 border-black' : ''}`}
        style={getBackgroundStyle(card.type)}
        onClick={() => onClick(card)}
    >
      <div className='text-center break-keep text-white font-bold text-lg'>{card.item}</div>
    </div>
  );
};

export default Card;
