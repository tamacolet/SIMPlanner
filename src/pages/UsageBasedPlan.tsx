import React, { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UsageBasedPlan = () => {
  const [formData, setFormData] = useState({
    dataUsage: '',
    callMinutes: '',
    services: [] as string[],
  });

  const services = ['動画視聴', 'ゲーム', 'SNS', '音楽ストリーミング', 'テザリング'];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold">使用状況からプラン選択</h1>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">データ使用量</span>
            <div className="mt-1 relative">
              <input
                type="number"
                value={formData.dataUsage}
                onChange={(e) => setFormData(prev => ({ ...prev, dataUsage: e.target.value }))}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="0"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">GB/月</span>
            </div>
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">通話時間</span>
            <div className="mt-1 relative">
              <input
                type="number"
                value={formData.callMinutes}
                onChange={(e) => setFormData(prev => ({ ...prev, callMinutes: e.target.value }))}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="0"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">分/月</span>
            </div>
          </label>

          <div className="space-y-2">
            <span className="text-gray-700 font-medium">よく使うサービス（複数選択可）</span>
            <div className="space-y-2">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3">{service}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/plan-results"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          条件に合うプランを探す
          <ChevronRight className="w-4 h-4" />
        </Link>
      </form>
    </div>
  );
};

export default UsageBasedPlan;