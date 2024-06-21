import React from 'react';
import logo from '../logo.png';

function Navbar({handleOpenAbout, handleOpenPages, setRightContentVisible}) {

  const handleCardPick = () => {
    setRightContentVisible(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md h-[60px]">
      <div className="container py-2 mx-auto flex items-center justify-between">
        <div className="hidden md:block text-xl font-bold space-x-1">
          {/* 로고 부분 */}
          <a href="https://ls.snu.ac.kr/sub_center/center4.php">
            <img src={logo} alt="logo" className="h-12" />
          </a>
        </div>
        <div className="flex space-x-2">
          {/* 메뉴 부분 */}
          <div onClick={handleCardPick} className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-10 py-1 rounded cursor-pointer">🂠 Cards</div>
          <div onClick={handleOpenPages} className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-10 py-1 rounded cursor-pointer">🗂️ Pages</div>
          <div onClick={handleOpenAbout} className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-10 py-1 rounded cursor-pointer">🔍 About</div>
        </div>
        <div className="space-x-1 hidden md:block">
          <span className="text-gray-700">_</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
