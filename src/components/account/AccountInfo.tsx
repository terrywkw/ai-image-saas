"use client";

export default function AccountInfo() {
  // mock data
  const user = {
    name: 'Terry WANG',
    email: 'terryw.k.wang@gmail.com',
    id: '345414983800064650',
    avatar: '', // 可用頭像連結，暫用 emoji
  };
  return (
    <section className="mb-8 flex items-center gap-6">
      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-4xl">
        {user.avatar ? <img src={user.avatar} alt="avatar" className="w-full h-full rounded-full" /> : '👤'}
      </div>
      <div>
        <div className="text-xl font-bold mb-1">{user.name}</div>
        <div className="text-gray-600 mb-1">{user.email}</div>
        <div className="text-xs text-gray-400">用戶 ID：{user.id}</div>
      </div>
    </section>
  );
} 