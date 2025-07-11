"use client";
import { Table, Button, Tooltip } from '@arco-design/web-react';
import { IconDownload, IconDelete } from '@arco-design/web-react/icon';

const typeMap: Record<string, string> = {
  photo: '照片編輯',
  genai: '生成AI',
  face: '臉部AI',
  video: '影片編輯',
};

const allRecords = [
  { url: '/demo_enhance_01.gif', name: 'AI增強_01', type: 'photo', date: '2025/07/08' },
  { url: '/demo_object_removeal_01.gif', name: '物件移除_01', type: 'photo', date: '2025/07/09' },
  { url: '/demo_image_generator_01.gif', name: '生成圖_01', type: 'genai', date: '2025/07/10' },
  { url: '/demo_face_swap_01.webp', name: '臉部交換_01', type: 'face', date: '2025/07/11' },
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', name: '影片增強_01', type: 'video', date: '2025/07/12' },
];

const columns = [
  {
    title: '縮圖',
    dataIndex: 'url',
    width: 80,
    render: (url: string) => <img src={url} alt="thumb" className="w-16 h-12 object-cover rounded bg-gray-100" />,
  },
  {
    title: '名稱',
    dataIndex: 'name',
    width: 160,
    render: (name: string) => <span className="font-medium">{name}</span>,
  },
  {
    title: '功能類型',
    dataIndex: 'type',
    width: 120,
    render: (type: string) => <span>{typeMap[type]}</span>,
  },
  {
    title: '日期',
    dataIndex: 'date',
    width: 120,
  },
  {
    title: '操作',
    dataIndex: 'actions',
    width: 100,
    render: () => (
      <div className="flex items-center gap-4">
        <Tooltip content="下載"><Button shape="circle" icon={<IconDownload />} size="small" /></Tooltip>
        <Tooltip content="刪除"><Button shape="circle" icon={<IconDelete />} size="small" status="danger" /></Tooltip>
      </div>
    ),
  },
];

export default function AccountGalleryTable({ filterType }: { filterType: string }) {
  const data = allRecords.filter(r => r.type === filterType);
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
      <Table
        columns={columns}
        data={data}
        pagination={false}
        stripe
        hover
        className="modern-table"
        rowKey={(r) => r.url + r.date}
        scroll={{ x: 600 }}
        style={{ borderRadius: 16 }}
        noDataElement={<div className="text-gray-400 py-8">尚無紀錄</div>}
      />
    </div>
  );
} 