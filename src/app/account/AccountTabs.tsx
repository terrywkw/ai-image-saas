"use client";

import { Tabs } from '@arco-design/web-react';
import { useRouter, usePathname } from 'next/navigation';

const tabs = [
  { key: 'profile', label: '帳戶' },
  { key: 'gallery', label: '相冊' },
  { key: 'settings', label: '設定' },
  // { key: 'tool-history', label: '工具使用紀錄' }, // 可選
];

export default function AccountTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const current = pathname.split('/')[2] || 'profile';

  function handleTabChange(key: string) {
    router.push(`/account/${key}`);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <Tabs
        type="line"
        size="large"
        activeTab={current}
        onChange={handleTabChange}
        className="account-tabs"
      >
        {tabs.map((tab) => (
          <Tabs.TabPane key={tab.key} title={tab.label} />
        ))}
      </Tabs>
    </div>
  );
} 