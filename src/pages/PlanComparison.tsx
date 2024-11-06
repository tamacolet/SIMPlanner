import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'プランA',
    price: '3,980',
    data: '20GB',
    speed: '～1Gbps',
    calls: '10分無料',
    carrier: 'ドコモ回線',
  },
  {
    name: 'プランB',
    price: '4,980',
    data: '30GB',
    speed: '～1Gbps',
    calls: 'かけ放題',
    carrier: 'au回線',
  },
];

const ComparisonRow = ({ label, values }: { label: string; values: string[] }) => (
  <div className="grid grid-cols-2 gap-4 py-3 border-b">
    <div className="text-gray-600 font-medium">{label}</div>
    <div className="grid grid-cols-2 gap-4">
      {values.map((value, index) => (
        <div
          key={index}
          className={`text-center ${
            index === 0 ? 'text-blue-600' : 'text-gray-900'
          }`}
        >
          {value}
        </div>
      ))}
    </div>
  </div>
);

const PlanComparison = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold">プラン比較</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-gray-600 font-medium">プラン名</div>
          <div className="grid grid-cols-2 gap-4">
            {plans.map((plan) => (
              <div key={plan.name} className="text-center font-semibold">
                {plan.name}
              </div>
            ))}
          </div>
        </div>

        <ComparisonRow
          label="月額料金"
          values={plans.map((plan) => `¥${plan.price}`)}
        />
        <ComparisonRow
          label="データ容量"
          values={plans.map((plan) => plan.data)}
        />
        <ComparisonRow
          label="通信速度"
          values={plans.map((plan) => plan.speed)}
        />
        <ComparisonRow
          label="通話オプション"
          values={plans.map((plan) => plan.calls)}
        />
        <ComparisonRow
          label="キャリア"
          values={plans.map((plan) => plan.carrier)}
        />

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="text-gray-600 font-medium" />
          <div className="grid grid-cols-2 gap-4">
            {plans.map((plan) => (
              <button
                key={plan.name}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700"
              >
                詳細を見る
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;