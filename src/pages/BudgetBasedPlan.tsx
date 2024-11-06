import React, { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BudgetBasedPlan = () => {
  const [budget, setBudget] = useState('');
  const [priorities, setPriorities] = useState('data');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold">予算からプラン選択</h1>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">月額予算</span>
            <div className="mt-1 relative">
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="0"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">円以下</span>
            </div>
          </label>

          <div className="space-y-2">
            <span className="text-gray-700 font-medium">重視する条件</span>
            <div className="space-y-2">
              {[
                { id: 'data', label: 'データ容量' },
                { id: 'speed', label: '通信速度' },
                { id: 'contract', label: '契約期間' },
              ].map(({ id, label }) => (
                <label
                  key={id}
                  className="flex items-center p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="priority"
                    value={id}
                    checked={priorities === id}
                    onChange={(e) => setPriorities(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/plan-results"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          プランを検索
          <ChevronRight className="w-4 h-4" />
        </Link>
      </form>
    </div>
  );
};

export default BudgetBasedPlan;