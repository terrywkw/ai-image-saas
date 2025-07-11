"use client";
import { Tabs } from '@arco-design/web-react';
import { useEffect, useState } from 'react';

const categories = [
  { key: 'enhance', label: 'Enhance' },
  { key: 'remove', label: 'Remove' },
  { key: 'generate', label: 'Generate' },
  { key: 'background', label: 'Background' },
  { key: 'face', label: 'Face/Avatar' },
  { key: 'video', label: 'Video' },
];

// Offset for sticky header + tab bar (header: 64px, tab bar: 48px)
const SCROLL_OFFSET = 112;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('enhance');

  useEffect(() => {
    function onScroll() {
      let found = false;
      for (let i = categories.length - 1; i >= 0; i--) {
        const cat = categories[i];
        const el = document.getElementById(cat.key);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= SCROLL_OFFSET + 10) { // 10px buffer
            setActiveTab(cat.key);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveTab(categories[0].key);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleTabChange(id: string) {
    setActiveTab(id);
    scrollToSection(id);
  }

  return (
    <div className="sticky top-16 z-20 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs
          type="line"
          size="large"
          activeTab={activeTab}
          onChange={handleTabChange}
          className="feature-tabs"
        >
          {categories.map((cat) => (
            <Tabs.TabPane key={cat.key} title={cat.label} />
          ))}
        </Tabs>
      </div>
    </div>
  );
} 