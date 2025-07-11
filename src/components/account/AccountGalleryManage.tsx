"use client";

export default function AccountGalleryManage() {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold mb-2">圖片管理</h3>
      <div className="flex gap-4 mb-2">
        <button className="px-4 py-2 rounded bg-red-100 text-red-600 font-bold">批次刪除</button>
        <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-bold">全選</button>
        <button className="px-4 py-2 rounded bg-[#1DE9B6] text-white font-bold">上傳新圖片</button>
      </div>
      <div className="text-xs text-gray-500">（功能尚未串接，僅為介面展示）</div>
    </section>
  );
} 