"use client";
import { Card, Typography } from '@arco-design/web-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Emily Carter',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The AI photo enhance tool made my old family photos look brand new. Absolutely magical!'
  },
  {
    name: 'James Lee',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'I removed unwanted objects from my vacation pics in seconds. Super easy and impressive results.'
  },
  {
    name: 'Sophia Turner',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'The AI image generator is a game changer for my creative projects. Highly recommended!'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-white to-[#f5faff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography.Title heading={2} className="text-center mb-10">What Our Users Say</Typography.Title>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="flex-1 flex flex-col items-center p-8 border-0"
              style={{
                minWidth: 260,
                maxWidth: 340,
                minHeight: 340,
                borderRadius: 24,
                boxShadow: '0 8px 32px #2F80FF22',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                transition: 'box-shadow 0.2s',
              }}
              bodyStyle={{
                padding: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
              hoverable
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={72}
                height={72}
                className="rounded-full mb-4 shadow-lg object-cover"
              />
              <Typography.Text style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{t.name}</Typography.Text>
              <Typography.Paragraph style={{ fontSize: 16, color: '#23272F', textAlign: 'center', marginTop: 8 }}>
                “{t.quote}”
              </Typography.Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 