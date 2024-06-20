import React, { useState } from 'react';
import useStore from '../store/useStore';
import Card from './Card';

const ContentEditor = () => {
  const { cards, updateCardItem, currentSelectedCard, updateSelectedCard } = useStore();
  
  const getItemValue = (id) => {
    const card = cards.find(card => card.id === id);
    return card ? card.item : '';
  };
  
  const getBackgroundStyle = (type) => {
    switch (type) {
      case 'technology':
        return {
          background: 'linear-gradient(156deg, #5F8BFF -36.94%, #B218CB 174.15%)',
        };
      case 'pedagogy':
        return {
          background: 'linear-gradient(156deg, #FFBF5F -36.94%, #B218CB 174.15%)',
        };
      case 'content':
        return {
          background: 'linear-gradient(156deg, #EEAA27 -36.94%, #B9EF21 174.15%)',
        };
      default:
        return {};
    }
  };

  const handleSelectItem = (card) => {
    updateSelectedCard(card.type, card.id);
  };

  const [items, setItems] = useState({
    201: getItemValue(201),
    202: getItemValue(202),
    203: getItemValue(203),
    204: getItemValue(204),
  });

  const handleChange = (id, value) => {
    setItems({ ...items, [id]: value });
    updateCardItem(id, value);
  };

  return (
    <div className="w-full h-full bg-[#fff4e1] flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Content 입력하기</h2>
      <div className='flex mb-8'>
        
      {cards.filter(card => card.type === "content").map(card => (
        <Card 
        key={card.id} 
        card={card}
        onClick={handleSelectItem} 
        getBackgroundStyle={getBackgroundStyle}
        isSelected={currentSelectedCard["content"] === card.id}
        />
      ))}

      </div>
      <div className="w-full max-w-md">
      {Object.keys(items).map((id, index) => (
          <div key={id} className="mb-4">
            <label className="block text-lg font-medium mb-2">Content {index + 1}</label>
            <input
              type="text"
              className="w-full p-2 px-4 border rounded-full"
              placeholder='Content를 입력하세요. (20자 이내)'
              value={items[id]}
              maxLength={20}
              onChange={(e) => handleChange(parseInt(id, 10), e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentEditor;
