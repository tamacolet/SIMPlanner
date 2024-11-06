import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 1,
    name: 'ギガプラン',
    carrier: 'ドコモ',
    price: '7,480',
    data: '20GB',
    speed: '最大1Gbps',
    calls: '10分かけ放題',
    features: [
      '5G対応',
      'テザリング可能',
      'キャリアメール利用可能',
      'dポイント対象',
    ],
  },
  // Add more plans as needed
];

const PlanDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold">プラン詳細</h1>
      </div>

      <div className="space-y-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="text-gray-500">{plan.carrier}</p>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">¥{plan.price}</span>
                <span className="text-gray-500">/月</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">データ容量</span>
                  <p className="font-medium">{plan.data}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">通信速度</span>
                  <p className="font-medium">{plan.speed}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">通話オプション</span>
                  <p className="font-medium">{plan.calls}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">プラン特徴</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700">
                このプランを申し込む
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanDetails;