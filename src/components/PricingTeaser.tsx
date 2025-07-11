"use client";
import { Card, Typography, Button, Space } from '@arco-design/web-react';

export default function PricingTeaser() {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4 bg-gradient-to-b from-[#e6f7ff] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <Card style={{ maxWidth: 480, borderRadius: 20, boxShadow: '0 4px 24px #2F80FF22' }}>
          <Typography.Title heading={3} style={{ marginBottom: 8, color: '#2F80FF' }}>
            Free Trial & Flexible Pricing
          </Typography.Title>
          <Typography.Paragraph style={{ fontSize: 16, color: '#23272F', marginBottom: 20 }}>
            Get started with a free trial—no credit card required! After your trial, purchase tokens as you need. Perfect for creators and teams.
          </Typography.Paragraph>
          <Space size={16} direction="horizontal">
            <Button type="primary" size="large" shape="round">Start Free Trial</Button>
            <Button type="outline" size="large" shape="round">View Pricing</Button>
          </Space>
        </Card>
      </div>
    </section>
  );
} 