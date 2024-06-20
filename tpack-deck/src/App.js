import React from 'react';
import Navbar from './components/Navbar';
import useStore from './store/useStore';
import URLs from './data/URLs';
import Cards from './data/Cards';
import Card from './components/Card';

function App() {

  const { cards, currentSelectedCard, updateSelectedCard } = useStore();

  const handleSelectItem = (card) => {
    updateSelectedCard(card.type, card.id);
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
          background: 'linear-gradient(156deg, #FFBB37 -36.94%, #C9FF31 174.15%)',
        };
      default:
        return {};
    }
  };

  const renderCardsByType = (type) => (
    <div className="grid grid-cols-4 gap-4">
      {cards.filter(card => card.type === type).map(card => (
        <Card 
        key={card.id} 
        card={card} 
        getBackgroundStyle={getBackgroundStyle}
        onClick={handleSelectItem} 
        />
      ))}
    </div>
  );


  return (
    <div className='bg-[#f5f8fa] min-h-[100vh]'>
      <Navbar />
      <div className="pt-[44px] flex">
        <div className="w-1/2 p-10">
          <div className='flex-col md:flex-row flex mb-10'>
            <div className='bg-white border rounded-xl p-2 '>
              <h2 className="text-xl font-bold mb-4">선택된 카드들</h2>
                <div className="mb-4 w-full flex items-center ">
                  <Card card={cards.find(card => card.id === currentSelectedCard.technology)} getBackgroundStyle={getBackgroundStyle} onClick={handleSelectItem} />
                  <Card card={cards.find(card => card.id === currentSelectedCard.pedagogy)} getBackgroundStyle={getBackgroundStyle} onClick={handleSelectItem} />
                  <Card card={cards.find(card => card.id === currentSelectedCard.content)} getBackgroundStyle={getBackgroundStyle} onClick={handleSelectItem} />
                </div>
            </div>
            <div className='flex flex-col p-4 items-end justify-end'>
              <button className='bg-blue-500 text-white w-full px-4 py-2 rounded-full mt-4'>Content 입력</button>
              <button className='bg-blue-500 text-white w-full px-4 py-2 rounded-full mt-4'>랜덤 뽑기</button>
              <button className='bg-blue-500 text-white w-full px-4 py-2 rounded-full mt-4'>Padlet 열기</button>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Technology</h2>
            {renderCardsByType('technology')}
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold mb-2">Pedagogy</h2>
            {renderCardsByType('pedagogy')}
          </div>
        </div>
        <div className="w-1/2 bg-white p-4 flex flex-col items-center justify-center">
        </div>
      </div>
    </div>
  );
}

export default App;
