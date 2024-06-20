import React from 'react';
import logo from '../logo.png';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md h-[60px]">
      <div className="container py-2 mx-auto flex items-center justify-between">
        <div className="hidden md:block text-xl font-bold space-x-1">
          {/* 로고 부분 */}
          <a href="/">
            <img src={logo} alt="logo" className="h-12" />
          </a>
        </div>
        <div className="flex space-x-2">
          {/* 메뉴 부분 */}
          <a href="/card-draw" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-10 py-1 rounded">🂠 카드뽑기</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-10 py-1 rounded">🔍 About</a>
        </div>
        <div className="space-x-1 hidden md:block"></div>
      </div>
    </nav>
  );
}

export default Navbar;
