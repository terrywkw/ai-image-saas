"use client";

export default function AccountGalleryList() {
  // mock data
  const images = [
    { url: '/demo_enhance_01.gif', name: 'AI增強_01', date: '2025/07/08' },
    { url: '/demo_object_removeal_01.gif', name: '物件移除_01', date: '2025/07/09' },
    { url: '/demo_face_swap_01.webp', name: '臉部交換_01', date: '2025/07/10' },
  ];
  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold mb-2">我的圖片</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="border rounded-xl p-3 flex flex-col items-center bg-white shadow-sm">
            <img src={img.url} alt={img.name} className="w-40 h-32 object-cover rounded mb-2 bg-gray-100" />
            <div className="font-semibold mb-1">{img.name}</div>
            <div className="text-xs text-gray-500 mb-2">{img.date}</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm rounded bg-[#2F80FF] text-white">下載</button>
              <button className="px-3 py-1 text-sm rounded bg-red-100 text-red-600">刪除</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 