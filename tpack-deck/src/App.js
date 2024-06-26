import React, { useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import useStore from './store/useStore';
import URLs from './data/URLs';
import Cards from './data/Cards';
import Card from './components/Card';
import ContentEditor from './components/ContentEditor';
import About from './components/About';
import Pages from './components/Pages';

function App() {

  const { cards, currentSelectedCard, updateSelectedCard, selectRandomCards } = useStore();
  const [pageParam, setPageParam] = useState(null);
  const [area, setArea] = useState(null);
  const [no, setNo] = useState(null);
  const [rightContent, setRightContent] = useState(null);
  const [rightContentVisible, setRightContentVisible] = useState(false);


  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const pageParam_ = getQueryParam('page');
    console.log(pageParam_);

    const [area_, no_] = pageParam_ ? pageParam_.split('-').map(Number) : [null , null]; 
    console.log(area_, no_);

    setPageParam(pageParam_);
    setArea(area_);
    setNo(no_);
  }
  , []);

  const handleSelectItem = (card) => {
    updateSelectedCard(card.type, card.id);
  };

  const handleShowContentEditor = () => {
    setRightContentVisible(true);
    setRightContent(<ContentEditor />);
  };


  const handleOpenPadlet = () => {
    setRightContentVisible(true);
    const urlObject = URLs.find(url => url.area === area && url.no === no);
    if (urlObject) {
      setRightContent(
        <div className='padlet-embed w-full h-full'>
        <iframe 
          src={urlObject.url} 
          style={{ border: 'none' }} 
          width="100%"
          height="100%"
          title="Padlet"
          allow="camera;microphone;geolocation"
        ></iframe>
        </div>
      );
    } else {
      alert(`해당 페이지를 찾을 수 없습니다. ${area} - ${no}`);
    }
  };

  const handleOpenAbout = () => {
    setRightContentVisible(true);
    setRightContent(<About/>);
  }

  const handleOpenPages = () => {
    setRightContentVisible(true);
    setRightContent(<Pages/>);

  }

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

  const renderCardsByType = (type) => (
    <div className="grid grid-cols-4 gap-4">
      {cards.filter(card => card.type === type).map(card => (
        <Card 
        key={card.id} 
        card={card} 
        getBackgroundStyle={getBackgroundStyle}
        onClick={handleSelectItem} 
        isSelected={currentSelectedCard[type] === card.id}
        />
      ))}
    </div>
  );

  const handleRandomSelect = () => {
    selectRandomCards();
  };



  return (
    <div className='bg-[#f5f8fa] min-h-screen h-full'>
      <Navbar pageParam={pageParam} area={area} no={no} handleOpenAbout={handleOpenAbout} setRightContentVisible={setRightContentVisible} handleOpenPages={handleOpenPages}/>
      <div className="pt-[52px] flex">
        <div className={`${ rightContentVisible ? "w-1/2 overflow-scroll h-screen" : "max-w-[800px] mx-auto"} p-10 `}>
          <div className='flex-col md:flex-row flex mb-10'>
            <div className='bg-white border rounded-xl p-4'>
              <h2 className="text-xl font-bold mb-4">선택된 카드들</h2>
                <div className="mb-4 w-full flex items-center ">
                  <Card card={cards.find(card => card.id === currentSelectedCard.technology)} getBackgroundStyle={getBackgroundStyle} onClick={handleSelectItem} />
                  <Card card={cards.find(card => card.id === currentSelectedCard.pedagogy)} getBackgroundStyle={getBackgroundStyle} onClick={handleSelectItem} />
                  <Card card={cards.find(card => card.id === currentSelectedCard.content)} getBackgroundStyle={getBackgroundStyle} onClick={handleSelectItem} />
                </div>
            </div>
            <div className='flex flex-col p-4 items-end justify-end'>
              <button className='bg-[#FFBB37] font-bold w-full px-4 py-2 rounded-full mt-4 shadow-sm hover:scale-105 cursor-pointer transition-transform' onClick={handleShowContentEditor}>Content 입력</button>
              <button className='bg-[#CCF45B] font-bold w-full px-4 py-2 rounded-full mt-4 shadow-sm hover:scale-105 cursor-pointer transition-transform' onClick={handleRandomSelect}>랜덤 뽑기</button>
              { pageParam ?   
              <button className='bg-blue-500 text-white w-full px-4 py-2 rounded-full mt-4 shadow-sm hover:scale-105 cursor-pointer transition-transform' onClick={handleOpenPadlet}>Padlet 열기</button>
              : ""}
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
        { rightContentVisible ? 
        <div className="w-1/2 h-screen overflow-scroll flex flex-col items-center justify-center">
          {rightContent}
        </div>
        : ""}
      </div>
    </div>
  );
}

export default App;
