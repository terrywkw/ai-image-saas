"use client";
import { Dropdown, Button, Space, Drawer } from '@arco-design/web-react';
import Link from 'next/link';
import { IconMenu } from '@arco-design/web-react/icon';
import { useState } from 'react';

const aiToolCategories = [
  {
    heading: 'AI Photo Editing',
    tools: [
      { key: 'photo-enhance', label: 'Photo Enhance', icon: '✨' },
      { key: 'colorize', label: 'Colorize', icon: '🎨', badge: 'HOT' },
      { key: 'color-correct', label: 'Color Correction', icon: '🌈' },
      { key: 'lighting', label: 'Lighting', icon: '💡' },
      { key: 'replace', label: 'Replace', icon: '🔄' },
      { key: 'remove', label: 'Object Removal', icon: '🧹', badge: 'HOT' },
      { key: 'extender', label: 'Image Extender', icon: '🖼️' },
    ],
    seeAll: '#features',
  },
  {
    heading: 'AI Avatar',
    tools: [
      { key: 'headshot', label: 'Headshot Generator', icon: '🧑‍💼' },
      { key: 'studio', label: 'Studio Generator', icon: '🏢' },
      { key: 'avatar', label: 'Avatar Generator', icon: '👤', badge: 'NEW' },
      { key: 'face-swap', label: 'Face Swap', icon: '😎' },
      { key: 'face-edit', label: 'Face Edit', icon: '😊' },
    ],
    seeAll: '#features',
  },
  {
    heading: 'AI Video Editing',
    tools: [
      { key: 'video-enhance', label: 'Video Enhance', icon: '🎬', badge: 'HOT' },
      { key: 'video-face-swap', label: 'Video Face Swap', icon: '🤖' },
      { key: 'video-style', label: 'Video Style Transfer', icon: '🎭' },
    ],
    seeAll: '#features',
  },
];

export default function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  // 模擬登入狀態，未來可串接真實登入資訊
  const isLoggedIn = true; // 切換 true 可測試帳號 icon
  const user = {
    name: 'Terry WANG',
    email: 'terryw.k.wang@gmail.com',
    avatar: '', // 可用頭像連結，暫用 emoji
  };

  const accountMenu = (
    <div className="min-w-[180px] py-2 bg-white shadow-lg rounded-xl">
      <div className="px-4 py-2 border-b text-sm text-gray-700">
        <div className="font-bold">{user.name}</div>
        <div className="text-xs text-gray-500">{user.email}</div>
      </div>
      <Link href="/account" className="block px-4 py-2 hover:bg-gray-100 text-sm">帳戶</Link>
      <Link href="/account/gallery" className="block px-4 py-2 hover:bg-gray-100 text-sm">相冊</Link>
      <Link href="/account/settings" className="block px-4 py-2 hover:bg-gray-100 text-sm">API整合</Link>
      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500">登出</button>
    </div>
  );

  return (
    <header className="w-full sticky top-0 z-30 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 md:px-16 h-16">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#2F80FF] flex items-center gap-2">
          <span>GooK - AI 圖像編輯器</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 md:gap-6">
          <Link href="#" className="text-base font-medium text-[#23272F] hover:text-[#2F80FF] transition-colors duration-150 px-2 py-1">
            
          </Link>
          <Dropdown
            droplist={
              <div className="bg-white shadow-xl rounded-xl p-6 flex gap-8 min-w-[900px]">
                {aiToolCategories.map((cat) => (
                  <div key={cat.heading} className="flex flex-col min-w-[180px]">
                    <span className="font-bold text-[#2F80FF] mb-3 text-base">{cat.heading}</span>
                    {cat.tools.map((tool) => (
                      <Link
                        key={tool.key}
                        href={`/tools/${tool.key}`}
                        className="flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-[#f5faff] transition cursor-pointer text-sm"
                      >
                        <span className="text-xl">{tool.icon}</span>
                        <span className="font-medium">{tool.label}</span>
                        {tool.badge && (
                          <span className="ml-2 text-xs bg-pink-100 text-pink-600 rounded px-1.5 py-0.5 font-bold align-middle">{tool.badge}</span>
                        )}
                      </Link>
                    ))}
                    <a href={cat.seeAll} className="mt-2 text-xs text-[#2F80FF] hover:underline font-semibold">See all tools</a>
                  </div>
                ))}
              </div>
            }
            position="bl"
            trigger="hover"
          >
            <span className="text-base font-medium text-[#23272F] hover:text-[#2F80FF] transition-colors duration-150 px-2 py-1 cursor-pointer flex items-center gap-1">
              AI Tools
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0l-4.25-4.39a.75.75 0 0 1 .02-1.06z"/></svg>
            </span>
          </Dropdown>
          <Link href="/pricing" className="text-base font-medium text-[#23272F] hover:text-[#2F80FF] transition-colors duration-150 px-2 py-1">
            Pricing
          </Link>
          <Link href="#about" className="text-base font-medium text-[#23272F] hover:text-[#2F80FF] transition-colors duration-150 px-2 py-1">
            About
          </Link>
        </nav>
        {/* Desktop User Actions */}
        <Space size={12} direction="horizontal" className="hidden md:flex">
          {isLoggedIn ? (
            <Dropdown droplist={accountMenu} position="br" trigger="click">
              <button className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-[#f5faff] transition">
                <span className="text-2xl">👤</span>
                {/* <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" /> */}
              </button>
            </Dropdown>
          ) : (
            <>
              <Button type="text" className="font-medium text-[#2F80FF] hover:underline">Sign In</Button>
              <Button type="primary" shape="round" style={{ fontWeight: 700, padding: '0 1.5rem' }}>Sign Up</Button>
            </>
          )}
        </Space>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-[#f5faff] transition"
          onClick={() => setDrawerVisible(true)}
          aria-label="Open menu"
        >
          <IconMenu className="text-2xl text-[#2F80FF]" />
        </button>
        {/* Mobile Drawer */}
        <Drawer
          width={280}
          visible={drawerVisible}
          placement="left"
          closable={false}
          onCancel={() => setDrawerVisible(false)}
          className="md:hidden"
        >
          <div className="flex flex-col gap-4 mt-4">
            <Link href="#" className="text-lg font-semibold text-[#23272F] hover:text-[#2F80FF]" onClick={() => setDrawerVisible(false)}>
              Home
            </Link>
            <div>
              <span className="font-bold text-[#2F80FF] mb-2 block">AI Tools</span>
              {aiToolCategories.map((cat) => (
                <div key={cat.heading} className="mb-2">
                  <span className="text-xs text-[#2F80FF] font-semibold mb-1 block">{cat.heading}</span>
                  {cat.tools.map((tool) => (
                    <Link
                      key={tool.key}
                      href={`/tools/${tool.key}`}
                      className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#f5faff] transition text-sm"
                      onClick={() => setDrawerVisible(false)}
                    >
                      <span className="text-lg">{tool.icon}</span>
                      <span>{tool.label}</span>
                      {tool.badge && (
                        <span className="ml-2 text-xs bg-pink-100 text-pink-600 rounded px-1.5 py-0.5 font-bold align-middle">{tool.badge}</span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}
              <a href="#features" className="text-xs text-[#2F80FF] hover:underline font-semibold block mt-2">See all tools</a>
            </div>
            <Link href="/pricing" className="text-lg font-semibold text-[#23272F] hover:text-[#2F80FF]" onClick={() => setDrawerVisible(false)}>
              Pricing
            </Link>
            <Link href="#about" className="text-lg font-semibold text-[#23272F] hover:text-[#2F80FF]" onClick={() => setDrawerVisible(false)}>
              About
            </Link>
            <div className="flex gap-2 mt-4">
              <Button type="text" className="font-medium text-[#2F80FF] hover:underline flex-1">Sign In</Button>
              <Button type="primary" shape="round" className="flex-1" style={{ fontWeight: 700 }}>Sign Up</Button>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
} 