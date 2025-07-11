"use client";

export default function AccountSubscription() {
  // mock data
  const subscription = {
    plan: '專業版',
    status: '已訂閱',
    expire: '2025/12/31',
  };
  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold mb-2">訂閱方案</h3>
      <div className="flex items-center gap-4 mb-2">
        <span className="font-semibold">{subscription.plan}</span>
        <span className="text-green-600 text-sm">{subscription.status}</span>
        <span className="text-xs text-gray-500">到期日：{subscription.expire}</span>
      </div>
      <button className="px-4 py-2 rounded bg-[#2F80FF] text-white font-bold">管理訂閱</button>
    </section>
  );
} 