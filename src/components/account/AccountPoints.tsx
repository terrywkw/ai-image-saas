"use client";

export default function AccountPoints() {
  // mock data
  const points = 120;
  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold mb-2">點數資訊</h3>
      <div className="flex items-center gap-4 mb-2">
        <span className="text-2xl font-bold text-[#2F80FF]">{points} 點</span>
      </div>
      <button className="px-4 py-2 rounded bg-[#1DE9B6] text-white font-bold">購買點數</button>
    </section>
  );
} 