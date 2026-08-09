import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:shadow-md transition-shadow">
            B$
          </div>
          <div>
            <span className="text-xl font-bold text-gray-800 tracking-tight">
              Banco<span className="text-green-600">Digital</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              Seguro
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 hidden md:inline-block">
            🏦 Brasil
          </span>
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium text-sm">
            S
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;