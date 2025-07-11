"use client";
import { Radio, Button } from '@arco-design/web-react';

export default function AccountSettingsPrivacy() {
  return (
    <section className="mb-8 p-6 bg-white rounded-2xl shadow">
      <h3 className="text-lg font-bold mb-4">隱私權</h3>
      <div className="flex flex-col gap-4 mb-4">
        <div className="font-medium mb-2">個人資料顯示</div>
        <Radio.Group defaultValue="public" direction="horizontal">
          <Radio value="public">公開</Radio>
          <Radio value="private">隱藏</Radio>
        </Radio.Group>
      </div>
      <Button status="danger" type="outline">刪除帳號</Button>
    </section>
  );
} 