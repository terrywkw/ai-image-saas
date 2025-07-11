"use client";
import { Select } from '@arco-design/web-react';

export default function AccountSettingsOther() {
  return (
    <section className="mb-8 p-6 bg-white rounded-2xl shadow">
      <h3 className="text-lg font-bold mb-4">其他</h3>
      <div className="flex flex-col gap-4">
        <div>
          <div className="font-medium mb-2">語言切換</div>
          <Select defaultValue="zh-TW" style={{ width: 160 }}>
            <Select.Option value="zh-TW">繁體中文</Select.Option>
            <Select.Option value="en">English</Select.Option>
          </Select>
        </div>
        <div>
          <div className="font-medium mb-2">其他偏好</div>
          <div className="text-gray-500 text-sm">（未來可擴充更多設定）</div>
        </div>
      </div>
    </section>
  );
} 