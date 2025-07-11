"use client";
import { Tabs } from '@arco-design/web-react';

const galleryTypes = [
  { key: 'photo', label: '照片編輯' },
  { key: 'genai', label: '生成AI' },
  { key: 'face', label: '臉部AI' },
  { key: 'video', label: '影片編輯' },
];

export default function AccountGalleryTabs({ value, onChange }: { value: string, onChange: (key: string) => void }) {
  return (
    <div className="mb-6">
      <Tabs
        type="line"
        size="large"
        activeTab={value}
        onChange={onChange}
        className="account-gallery-tabs"
      >
        {galleryTypes.map((tab) => (
          <Tabs.TabPane key={tab.key} title={tab.label} />
        ))}
      </Tabs>
    </div>
  );
} 