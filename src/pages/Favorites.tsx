import React from 'react';
import { ArrowLeft, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const FavoriteItem = ({ plan }: { plan: any }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 space-y-3">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-lg">{plan.name}</h3>
        <p className="text-sm text-gray-500">{plan.carrier}</p>
      </div>
      <button className="text-red-500 hover:text-red-600">
        <Heart className="w-5 h-5 fill-current" />
      </button>
    </div>

    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-bold">¥{plan.price}</span>
      <span className="text-gray-500">/月</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
        {plan.data}
      </span>
      {plan.features.map((feature: string) => (
        <span
          key={feature}
          className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-sm"
        >
          {feature}
        </span>
      ))}
    </div>

    <Link
      to={`/plan/${plan.id}`}
      className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
    >
      <span>詳細を見る</span>
      <ExternalLink className="w-4 h-4" />
    </Link>
  </div>
);

const Favorites = () => {
  const favoritePlans = [
    {
      id: 1,
      name: 'ギガプラン',
      carrier: 'ドコモ',
      price: '7,480',
      data: '20GB',
      features: ['5G対応', '10分かけ放題'],
    },
    {
      id: 2,
      name: 'スタンダードプラン',
      carrier: 'au',
      price: '6,480',
      data: '15GB',
      features: ['5G対応', '家族割引'],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold">お気に入り</h1>
      </div>

      {favoritePlans.length > 0 ? (
        <div className="space-y-4">
          {favoritePlans.map((plan) => (
            <FavoriteItem key={plan.id} plan={plan} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">お気に入りのプランはありません</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;