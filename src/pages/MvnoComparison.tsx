import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const carriers = [
  {
    name: 'IIJmio',
    network: 'ドコモ回線',
    price: '1,728',
    data: '4GB',
    features: ['音声通話付き', '3キャリア対応', '最大1Gbps'],
  },
  {
    name: 'LINEモバイル',
    network: 'ソフトバンク回線',
    price: '2,480',
    data: '6GB',
    features: ['SNSカウントフリー', '通話定額オプション', '最大988Mbps'],
  },
  // Add more carriers as needed
];

const MvnoComparison = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold">格安SIM比較</h1>
      </div>

      <div className="space-y-4">
        {carriers.map((carrier) => (
          <div
            key={carrier.name}
            className="bg-white rounded-lg shadow-sm p-4 space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{carrier.name}</h3>
                <p className="text-sm text-gray-500">{carrier.network}</p>
              </div>
              <Link
                to={`/carrier/${carrier.name}`}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span className="text-sm">詳細</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">¥{carrier.price}</span>
              <span className="text-gray-500">/月</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                {carrier.data}
              </span>
              {carrier.features.map((feature) => (
                <span
                  key={feature}
                  className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MvnoComparison;