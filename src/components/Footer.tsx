"use client";
import { Typography, Space, Select } from '@arco-design/web-react';
import { useState } from 'react';

const socialLinks = [
  { href: 'https://twitter.com/', label: 'Twitter', icon: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
  ) },
  { href: 'https://facebook.com/', label: 'Facebook', icon: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ) },
  { href: 'https://github.com/', label: 'Github', icon: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  ) },
];

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
  { href: '#privacy', label: 'Privacy' },
  { href: '#terms', label: 'Terms' },
  { href: '#contact', label: 'Contact' },
];

const languages = [
  { label: 'EN', value: 'en' },
  { label: '繁體中文', value: 'zh-TW' },
];

function t(text: string) { return text; } // Placeholder for i18n

export default function Footer() {
  const [lang, setLang] = useState('en');
  return (
    <footer className="w-full pt-10 pb-8 px-4 bg-[#23272F] flex flex-col items-center text-center border-t border-[#e6f7ff] mt-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
        <Space size={24} direction="horizontal" className="flex-wrap">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-white hover:text-[#2F80FF] text-sm font-medium transition-colors duration-150">
              {t(link.label)}
            </a>
          ))}
        </Space>
        <Space size={16} direction="horizontal">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1DE9B6] transition-colors duration-150">
              {s.icon}
            </a>
          ))}
        </Space>
        <Select
          value={lang}
          onChange={setLang}
          style={{ width: 120 }}
          options={languages}
          size="small"
          className="bg-white rounded"
        />
      </div>
      <Typography.Text style={{ color: '#aaa', fontSize: 13 }}>
        © {new Date().getFullYear()} Gook - AI Image Editor. {t('All rights reserved.')}
      </Typography.Text>
    </footer>
  );
} 