"use client";
import { Typography, Button, Card } from '@arco-design/web-react';
import Image from 'next/image';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  image?: string;
  imageLeft?: boolean;
  id?: string;
  icon?: string;
}

export default function FeatureSection({ title, subtitle, image, imageLeft, id, icon }: FeatureSectionProps) {
  const placeholder = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';
  const bgClass = imageLeft
    ? 'bg-gradient-to-r from-[#f5faff] to-white'
    : 'bg-gradient-to-l from-[#f5faff] to-white';
  return (
    <section id={id} className={`w-full py-16 px-4 ${bgClass} min-h-[500px] flex items-center`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full h-full min-h-[400px]" style={{ flex: 1 }}>
        <Card
          bordered={false}
          style={{
            borderRadius: 24,
            boxShadow: '0 4px 24px #2F80FF14',
            background: '#fff',
            width: '100%',
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: 400,
          }}
          bodyStyle={{
            padding: '2.5rem 2rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 48,
            minHeight: 400,
          }}
        >
        {imageLeft && (
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image src={image || placeholder} alt={title} width={480} height={320} className="rounded-2xl shadow-lg object-cover" />
          </div>
        )}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12">
          <div className="flex items-center mb-2">
            {icon && <span className="text-3xl mr-3">{icon}</span>}
            <Typography.Title heading={2} style={{ marginBottom: 8 }}>{title}</Typography.Title>
          </div>
          <Typography.Paragraph style={{ fontSize: 20, color: '#23272F', marginBottom: 28, fontWeight: 600, letterSpacing: 0.2, textShadow: '0 1px 8px #fff8' }}>
            {subtitle}
          </Typography.Paragraph>
          <Button
            type="primary"
            size="large"
            shape="round"
            style={{
              background: 'linear-gradient(90deg, #2F80FF 0%, #1DE9B6 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
              boxShadow: '0 4px 24px #2F80FF44',
              padding: '0 2.5rem',
              border: 'none',
              transition: 'transform 0.1s',
            }}
          >
            Try This Feature
          </Button>
        </div>
        {!imageLeft && (
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image src={image || placeholder} alt={title} width={480} height={320} className="rounded-2xl shadow-lg object-cover" />
          </div>
        )}
        </Card>
      </div>
    </section>
  );
} 