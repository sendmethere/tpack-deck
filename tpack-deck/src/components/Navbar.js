import React from 'react';
import logo from '../logo.png';

function Navbar({pageParam, area, no, handleOpenAbout, handleOpenPages, setRightContentVisible}) {

  const handleCardPick = () => {
    setRightContentVisible(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md h-[60px]">
      <div className="container grid grid-cols-5 py-2 mx-auto items-center justify-between">
        <div className="hidden md:flex items-center font-bold">
          {/* 로고 부분 */}
          <a href="https://ls.snu.ac.kr/sub_center/center4.php">
            <img src={logo} alt="logo" className="h-12" />
          </a>
        </div>
        <div className="flex col-span-3 justify-center">
          {/* 메뉴 부분 */}
          <div onClick={handleCardPick} className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-10 py-1 rounded cursor-pointer">🂠 Cards</div>
          { pageParam ? <div onClick={handleOpenPages} className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-10 py-1 rounded cursor-pointer">🗂️ Pages</div> : ""}
          <div onClick={handleOpenAbout} className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-10 py-1 rounded cursor-pointer">🔍 About</div>
        </div>
        <div className="hidden md:flex justify-end">
        { pageParam ? <span className='mx-4'>{area}권역 {no}분반</span> : ""}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
