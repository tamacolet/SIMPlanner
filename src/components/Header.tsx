import React from 'react';
import { Settings, User } from 'lucide-react';

const Header = () => {
  const [isLoggedIn] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 h-[60px] flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900">携帯料金比較</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          {isLoggedIn ? (
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5 text-gray-600" />
            </button>
          ) : (
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors">
              ログイン
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;