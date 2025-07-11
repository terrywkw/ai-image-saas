"use client";

import React, { useState } from "react";

export default function PricingPage() {
  const [planType, setPlanType] = useState<'subscription' | 'credit'>("subscription");

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">選擇您的方案和點數包</h1>
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-2 rounded-l-lg border border-[#2F80FF] font-semibold ${planType === 'subscription' ? 'bg-[#2F80FF] text-white' : 'bg-white text-[#2F80FF]'}`}
          onClick={() => setPlanType('subscription')}
        >
          訂閱
        </button>
        <button
          className={`px-6 py-2 rounded-r-lg border border-l-0 border-[#2F80FF] font-semibold ${planType === 'credit' ? 'bg-[#2F80FF] text-white' : 'bg-white text-[#2F80FF]'}`}
          onClick={() => setPlanType('credit')}
        >
          點數
        </button>
      </div>
      {planType === 'subscription' && (
        <>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            {/* Free Plan */}
            <div className="border-2 border-[#2F80FF] rounded-xl p-6 flex-1 max-w-xs text-center bg-white shadow-md">
              <div className="text-lg font-bold mb-2">免費</div>
              <div className="text-3xl font-extrabold mb-2">NT$0</div>
              <div className="mb-4 text-[#2F80FF] font-semibold">免費試用</div>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>註冊即可免費試用</li>
                <li>下載帶浮水印的圖片</li>
                <li>無需信用卡</li>
              </ul>
              <button className="w-full py-2 rounded bg-[#2F80FF] text-white font-bold">免費體驗</button>
            </div>
            {/* Plus Plan */}
            <div className="border-2 border-[#2F80FF] rounded-xl p-6 flex-1 max-w-xs text-center bg-white shadow-md">
              <div className="text-lg font-bold mb-2">PLUS</div>
              <div className="text-3xl font-extrabold mb-2">NT$109/月</div>
              <div className="mb-4 text-[#2F80FF] font-semibold">訂閱</div>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>100 點數/月</li>
                <li>存取 AI 進階編輯工具</li>
                <li>無廣告</li>
                <li>移除浮水印</li>
              </ul>
              <button className="w-full py-2 rounded bg-[#2F80FF] text-white font-bold">訂閱</button>
            </div>
            {/* Pro Plan */}
            <div className="border-2 border-[#2F80FF] rounded-xl p-6 flex-1 max-w-xs text-center bg-white shadow-md">
              <div className="text-lg font-bold mb-2">PRO</div>
              <div className="text-3xl font-extrabold mb-2">NT$191/月</div>
              <div className="mb-4 text-[#2F80FF] font-semibold">訂閱</div>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>300 點數/月</li>
                <li>完整解鎖所有進階功能</li>
                <li>移除浮水印</li>
                <li>允許商業使用</li>
              </ul>
              <button className="w-full py-2 rounded bg-[#2F80FF] text-white font-bold">訂閱</button>
            </div>
          </div>
          {/* Compare Table */}
          <div className="bg-blue-50 rounded-xl p-6 mb-10">
            <h2 className="text-2xl font-bold text-center mb-4">比較所有方案</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-center border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 font-bold">方案比較</th>
                    <th className="py-2 px-4 font-bold">免費</th>
                    <th className="py-2 px-4 font-bold">Plus</th>
                    <th className="py-2 px-4 font-bold">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">點數數量</td>
                    <td className="py-2 px-4">註冊贈送 5 點</td>
                    <td className="py-2 px-4">每月 100 點</td>
                    <td className="py-2 px-4">每月 300 點</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="py-2 px-4">AI 進階編輯</td>
                    <td className="py-2 px-4">每日 3 次生成</td>
                    <td className="py-2 px-4">✓</td>
                    <td className="py-2 px-4">✓</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">移除浮水印</td>
                    <td className="py-2 px-4">✗</td>
                    <td className="py-2 px-4">✓</td>
                    <td className="py-2 px-4">✓</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="py-2 px-4">商業用途</td>
                    <td className="py-2 px-4">✗</td>
                    <td className="py-2 px-4">✗</td>
                    <td className="py-2 px-4">✓</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">無廣告</td>
                    <td className="py-2 px-4">✗</td>
                    <td className="py-2 px-4">✓</td>
                    <td className="py-2 px-4">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {planType === 'credit' && (
        <>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            {/* Free Account */}
            <div className="border-2 border-[#2F80FF] rounded-xl p-6 flex-1 max-w-xs text-center bg-white shadow-md">
              <div className="text-lg font-bold mb-2">免費帳戶</div>
              <div className="text-3xl font-extrabold mb-2">NT$0</div>
              <div className="mb-4 text-[#2F80FF] font-semibold">免費體驗</div>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>立即體驗多項免費編輯</li>
                <li>下載帶浮水印的圖片</li>
                <li>無需信用卡</li>
              </ul>
              <button className="w-full py-2 rounded bg-[#2F80FF] text-white font-bold">免費註冊</button>
            </div>
            {/* Credit Purchase */}
            <div className="border-2 border-[#2F80FF] rounded-xl p-6 flex-1 max-w-xs text-center bg-white shadow-md">
              <div className="text-lg font-bold mb-2">閃用點數</div>
              <div className="text-3xl font-extrabold mb-2">NT$980</div>
              <div className="mb-4 text-[#2F80FF] font-semibold">限期儲值</div>
              <ul className="text-sm text-gray-700 mb-4 space-y-1 text-left">
                <li className="flex justify-between"><span>10 點</span><span>NT$110 / 點</span></li>
                <li className="flex justify-between"><span>50 點</span><span>NT$99 / 點</span></li>
                <li className="flex justify-between"><span>100 點</span><span>NT$98 / 點</span></li>
                <li className="flex justify-between"><span>300 點</span><span>NT$96 / 點</span></li>
                <li className="flex justify-between"><span>500 點</span><span>NT$95 / 點</span></li>
                <li className="flex justify-between"><span>1000 點</span><span>NT$93 / 點</span></li>
              </ul>
              <button className="w-full py-2 rounded bg-[#2F80FF] text-white font-bold">立即購買</button>
            </div>
          </div>
        </>
      )}
      {/* 點數包區塊可日後擴充 */}
    </main>
  );
} 