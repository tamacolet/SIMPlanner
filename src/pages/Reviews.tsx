import React from 'react';
import { ArrowLeft, Star, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    user: '田中さん',
    carrier: 'ドコモ',
    plan: 'ギガプラン',
    rating: 4,
    date: '2024-03-15',
    content: '通信速度が安定していて満足しています。カスタマーサポートの対応も丁寧でした。',
    likes: 12,
    usage: '6ヶ月',
  },
  {
    id: 2,
    user: '佐藤さん',
    carrier: 'au',
    plan: 'スタンダードプラン',
    rating: 5,
    date: '2024-03-14',
    content: '家族割引が適用されて、とてもお得に利用できています。電波の入りも良好です。',
    likes: 8,
    usage: '1年',
  },
];

const Reviews = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold">口コミ・レビュー</h1>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-sm p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{review.user}</h3>
                <p className="text-sm text-gray-500">
                  {review.carrier} - {review.plan}
                </p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-700">{review.content}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span>利用期間: {review.usage}</span>
                <span>{review.date}</span>
              </div>
              <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                <ThumbsUp className="w-4 h-4" />
                <span>{review.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700">
        レビューを投稿する
      </button>
    </div>
  );
};

export default Reviews;