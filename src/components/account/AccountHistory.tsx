"use client";
import { Table } from '@arco-design/web-react';

const records = [
  { date: '2025/07/08', desc: '註冊禮', points: '+5' },
  { date: '2025/07/09', desc: 'AI修圖', points: '-1' },
  { date: '2025/07/10', desc: '購買點數', points: '+50' },
];

const columns = [
  { title: '日期', dataIndex: 'date', width: 120 },
  { title: '描述', dataIndex: 'desc', width: 200 },
  { title: '點數', dataIndex: 'points', width: 80, render: (val: string) => <span className={val.startsWith('+') ? 'text-green-600 font-bold' : 'text-red-500 font-bold'}>{val}</span> },
];

export default function AccountHistory() {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold mb-2">使用紀錄</h3>
      <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
        <Table
          columns={columns}
          data={records}
          pagination={false}
          stripe
          hover
          className="modern-table"
          rowKey={(r) => r.date + r.desc}
          scroll={{ x: 400 }}
          style={{ borderRadius: 16 }}
          noDataElement={<div className="text-gray-400 py-8">尚無紀錄</div>}
        />
      </div>
    </section>
  );
} 