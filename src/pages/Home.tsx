import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  CreditCard,
  Percent,
  FileText,
  Heart,
  MessageSquare,
  FileQuestion,
  BarChart3,
} from 'lucide-react';

const MenuItem = ({ icon: Icon, title, subtitle, to }: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  to: string;
}) => (
  <Link
    to={to}
    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
  >
    <div className="bg-blue-50 p-3 rounded-lg">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  </Link>
);

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">携帯料金比較アプリ</h1>
        <p className="text-gray-600">＼最適なプランを見つけよう／</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MenuItem
          icon={Smartphone}
          title="使用状況からプラン選択"
          to="/usage-based"
        />
        <MenuItem
          icon={CreditCard}
          title="予算からプラン選択"
          to="/budget-based"
        />
        <MenuItem
          icon={Percent}
          title="格安SIM比較"
          to="/mvno-comparison"
        />
        <MenuItem
          icon={FileText}
          title="プラン詳細"
          to="/plan-details"
        />
        <MenuItem
          icon={Heart}
          title="お気に入り"
          to="/favorites"
        />
        <MenuItem
          icon={MessageSquare}
          title="口コミ・レビュー"
          to="/reviews"
        />
        <MenuItem
          icon={FileQuestion}
          title="契約手続きガイド"
          to="/guide"
        />
        <MenuItem
          icon={BarChart3}
          title="プラン比較"
          to="/compare"
        />
      </div>
    </div>
  );
};

export default Home;