"use client";
import { Switch } from '@arco-design/web-react';

export default function AccountSettingsNotification() {
  return (
    <section className="mb-8 p-6 bg-white rounded-2xl shadow">
      <h3 className="text-lg font-bold mb-4">通知設定</h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Email 通知</span>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">行銷推播</span>
          <Switch />
        </div>
      </div>
    </section>
  );
} 