import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const guides = [
  {
    title: '契約の流れ',
    description: '携帯電話の契約手続きの基本的な流れを解説します',
    steps: [
      '本人確認書類の準備',
      'プランの選択',
      '契約申し込み',
      'SIMカードの受け取り',
      '開通作業',
    ],
  },
  {
    title: '必要書類',
    description: '契約時に必要な書類について説明します',
    items: [
      '運転免許証',
      'マイナンバーカード',
      '健康保険証と補助書類',
      '在留カード（外国籍の方）',
    ],
  },
  {
    title: 'よくある質問',
    description: '契約時によくある質問とその回答をまとめています',
    questions: [
      'MNPの手続きはどうすればいいですか？',
      '契約期間の縛りはありますか？',
      '未成年でも契約できますか？',
      '分割払いは可能ですか？',
    ],
  },
];

const ContractGuide = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold">契約手続きガイド</h1>
      </div>

      <div className="space-y-4">
        {guides.map((guide) => (
          <div
            key={guide.title}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold">{guide.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{guide.description}</p>
            </div>

            <div className="border-t">
              {guide.steps && (
                <div className="p-4 space-y-2">
                  {guide.steps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}

              {guide.items && (
                <div className="p-4 space-y-2">
                  {guide.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {guide.questions && (
                <div className="divide-y">
                  {guide.questions.map((question) => (
                    <button
                      key={question}
                      className="w-full p-4 text-left hover:bg-gray-50 flex items-center justify-between"
                    >
                      <span>{question}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractGuide;