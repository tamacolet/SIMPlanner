import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Search, Heart, Bell, User } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'ホーム', path: '/' },
    { icon: Search, label: '検索', path: '/search' },
    { icon: Heart, label: 'お気に入り', path: '/favorites' },
    { icon: Bell, label: '通知', path: '/notifications' },
    { icon: User, label: 'マイページ', path: '/mypage' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-1 px-3 py-2 ${
                location.pathname === path ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;