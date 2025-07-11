import React from 'react';
import { ToolInfo } from './toolData';

export default function ToolDetail({ tool }: { tool: ToolInfo }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl">{tool.icon}</span>
        <h1 className="text-3xl font-bold">{tool.title}</h1>
      </div>
      <img src={tool.image} alt={tool.title} className="rounded-xl mb-6 w-full max-h-80 object-contain bg-gray-100" />
      <p className="text-lg mb-8">{tool.description}</p>
      {/* 範例區塊 */}
      <div className="flex flex-col gap-8 mb-8">
        {tool.examples.slice(0, 2).map((ex, idx) => (
          <div key={ex.title} className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-6 bg-blue-50 rounded-xl p-4`}>
            <img src={ex.image} alt={ex.title} className="w-full md:w-1/2 rounded-lg object-cover max-h-60 bg-white" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{ex.title}</h3>
              <p className="text-base text-gray-700">{ex.description}</p>
            </div>
          </div>
        ))}
      </div>
      {tool.status === 'coming-soon' && (
        <div className="py-2 px-4 bg-yellow-100 text-yellow-800 rounded mb-4 inline-block font-semibold">敬請期待</div>
      )}
      {tool.status === 'available' && (
        <button className="px-6 py-2 rounded bg-[#2F80FF] text-white font-bold">立即體驗</button>
      )}
    </section>
  );
} 