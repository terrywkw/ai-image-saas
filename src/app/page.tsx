"use client";
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import FeatureTabs from '../components/FeatureTabs';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureTabs />
      <FeatureSection
        title="AI Photo Enhance"
        subtitle="Sharpen, upscale, and bring your images to life."
        imageLeft={true}
        id="enhance"
        image="/demo_enhance_01.gif"
        icon="✨"
      />
      <FeatureSection
        title="AI Object Removal"
        subtitle="Erase unwanted objects or people from your photos."
        imageLeft={false}
        id="remove"
        image="/demo_object_removeal_01.gif"
        icon="🧹"
      />
      <FeatureSection
        title="AI Image Generator"
        subtitle="Create new images from text prompts."
        imageLeft={true}
        id="generate"
        image="/demo_image_generator_01.gif"
        icon="🎨"
      />
      <FeatureSection
        title="AI Background Change"
        subtitle="Instantly change or blur your photo backgrounds."
        imageLeft={false}
        id="background"
        image="/demo_background_remove_01.gif"
        icon="🌄"
      />
      <FeatureSection
        title="AI Face Swap"
        subtitle="Swap faces or create avatars with advanced AI."
        imageLeft={true}
        id="face"
        image="/demo_face_swap_01.webp"
        icon="😎"
      />
      <FeatureSection
        title="AI Video Enhance"
        subtitle="Upscale and transform your videos with AI."
        imageLeft={false}
        id="video"
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        icon="🎬"
      />
      <TestimonialsSection />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">如何使用 AI 圖片編輯工具？</h2>
        <p className="mb-4 text-lg leading-relaxed">
          本平台提供多種 AI 圖片編輯功能，讓您輕鬆完成照片增強、物件移除、背景更換、臉部交換等操作。只需上傳圖片，選擇想要的功能，系統即會自動處理並產生高品質的結果。無論您是攝影愛好者、設計師，還是一般用戶，都能快速上手，享受 AI 影像處理的便利。
        </p>
        <p className="text-base text-gray-600">
          未來我們將推出更多教學文章，協助您深入了解各項 AI 編輯工具的應用技巧，敬請期待！
        </p>
      </section>
    </main>
  );
}
