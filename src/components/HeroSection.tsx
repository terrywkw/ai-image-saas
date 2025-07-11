"use client";
import { Card, Button, Typography } from '@arco-design/web-react';

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[600px] flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5faff 0%, #e3f0ff 60%, #e0f7fa 100%)'
      }}
    >
      {/* Blurred Glow Shape */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-[#1DE9B6]/20 rounded-full blur-3xl z-0" />
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-8 py-20 mx-auto">
        <Card
          bordered={false}
          style={{
            borderRadius: 32,
            boxShadow: '0 8px 40px #1DE9B644, inset 0 0 32px 0 rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)'
          }}
          bodyStyle={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 48 }}
        >
          {/* Left: Text & CTA */}
          <div className="flex-1 flex flex-col justify-center items-start text-left md:pr-10">
            <div className="text-[56px] md:text-[72px] mb-4 animate-bounce drop-shadow-xl select-none">🤖</div>
            <Typography.Title heading={1} style={{ color: '#23272F', fontWeight: 800, textShadow: '0 4px 24px #fff4', marginBottom: 24, lineHeight: 1.1 }} className="text-4xl md:text-6xl text-left">
              Next-Gen AI Photo Editing
            </Typography.Title>
            <Typography.Paragraph style={{ color: '#2F80FF', fontWeight: 600, fontSize: 20, marginBottom: 32, textShadow: '0 2px 8px #e3f0ff' }} className="text-lg md:text-2xl text-left max-w-xl">
              Instantly enhance, transform, and create stunning images with 1-click AI tools. No design skills needed!
            </Typography.Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <Button
                type="primary"
                size="large"
                shape="round"
                style={{
                  background: 'linear-gradient(90deg, #2F80FF 0%, #1DE9B6 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 18,
                  boxShadow: '0 0 32px #1DE9B6aa, 0 4px 24px #2F80FF44',
                  padding: '0 2.5rem',
                  border: 'none',
                  transition: 'transform 0.1s',
                }}
              >
                🚀 Try Demo
              </Button>
              <Button
                type="outline"
                size="large"
                shape="round"
                style={{ borderColor: '#2F80FF', color: '#2F80FF', fontWeight: 700 }}
              >
                Sign Up
              </Button>
            </div>
          </div>
          {/* Right: Before-After Demo GIF */}
          <div className="flex-1 flex flex-col items-center justify-center md:items-end md:justify-center w-full">
            <Typography.Text style={{ color: '#1DE9B6', fontWeight: 700, fontSize: 18, background: 'rgba(255,255,255,0.10)', padding: '0.25rem 1.25rem', borderRadius: 999, boxShadow: '0 2px 12px #1DE9B633' }} className="mb-3">
              See the AI in Action
            </Typography.Text>
            <img
              src="/hero_demo_img_01.gif"
              alt="Before and After AI Demo"
              className="rounded-2xl shadow-2xl border-4 border-white/20 max-w-full w-[420px] md:w-[520px] h-auto"
              style={{ background: '#e3f0ff' }}
            />
          </div>
        </Card>
      </div>
    </section>
  );
} 