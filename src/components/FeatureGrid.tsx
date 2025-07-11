"use client";
import { Card, Grid, Typography, Button } from '@arco-design/web-react';

const features = [
  { name: 'AI Photo Enhance', desc: 'Sharpen and upscale your images instantly.' },
  { name: 'AI Object Removal', desc: 'Erase unwanted objects with a single click.' },
  { name: 'AI Image Generator', desc: 'Create new images from text prompts.' },
  { name: 'AI Background Removal', desc: 'Remove backgrounds for clean cutouts.' },
  { name: 'AI Face Swap', desc: 'Swap faces in photos with realistic results.' },
  { name: 'AI Colorize', desc: 'Add color to black & white photos.' },
];

export default function FeatureGrid() {
  return (
    <section className="w-full py-12 px-4 bg-white flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Typography.Title heading={2} style={{ marginBottom: 24 }}>
          Powerful AI Features
        </Typography.Title>
        <Grid.Row gutter={24} justify="center">
          {features.map((f) => (
            <Grid.Col key={f.name} xs={24} sm={12} md={8} lg={6} style={{ marginBottom: 24 }}>
              <Card
                hoverable
                className="transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                style={{ borderRadius: 24, minHeight: 220, boxShadow: '0 4px 24px #2F80FF14', background: '#fff' }}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3 text-3xl">🤖</div>
                  <Typography.Text style={{ fontWeight: 600 }}>{f.name}</Typography.Text>
                  <Typography.Paragraph style={{ color: '#666', marginTop: 8, fontSize: 14 }}>
                    {f.desc}
                  </Typography.Paragraph>
                    <Button
                      type="primary"
                      size="large"
                      shape="round"
                      className="mt-4 cursor-pointer transition-transform duration-150 hover:scale-105"
                      style={{
                        background: 'linear-gradient(90deg, #2F80FF 0%, #1DE9B6 100%)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: 16,
                        boxShadow: '0 2px 12px #2F80FF44',
                        border: 'none',
                        padding: '0 2rem',
                      }}
                    >
                    {f.name === 'AI Photo Enhance' ? 'Try Live Demo' : 'Learn More'}
                    </Button>
                </div>
              </Card>
            </Grid.Col>
          ))}
        </Grid.Row>
      </div>
    </section>
  );
} 