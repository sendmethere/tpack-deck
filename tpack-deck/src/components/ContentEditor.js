import React, { useState } from 'react';
import useStore from '../store/useStore';

const ContentEditor = () => {
  const { cards, updateCardItem } = useStore();
  
  const getItemValue = (id) => {
    const card = cards.find(card => card.id === id);
    return card ? card.item : '';
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
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Content 입력하기</h2>
      <div className="w-full max-w-md">
      {Object.keys(items).map((id, index) => (
          <div key={id} className="mb-4">
            <label className="block text-lg font-medium mb-2">Content {index + 1}</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={items[id]}
              onChange={(e) => handleChange(parseInt(id, 10), e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentEditor;
