export type ToolStatus = 'available' | 'coming-soon';

export interface ToolExample {
  image: string;
  title: string;
  description: string;
}

export interface ToolInfo {
  key: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  category: 'AI Photo Editing' | 'AI Avatar' | 'AI Video Editing';
  status: ToolStatus;
  examples: ToolExample[];
}

export const toolData: Record<string, ToolInfo> = {
  'photo-enhance': {
    key: 'photo-enhance',
    title: 'AI Photo Enhance',
    description: '自動增強照片畫質，提升細節與清晰度。',
    icon: '✨',
    image: '/demo_enhance_01.gif',
    category: 'AI Photo Editing',
    status: 'available',
    examples: [
      {
        image: '/examples/photo-enhance-1.jpg',
        title: '提升人像細節',
        description: 'AI 自動增強人像照片，讓五官更清晰自然。',
      },
      {
        image: '/examples/photo-enhance-2.jpg',
        title: '修復模糊風景照',
        description: '將低解析度風景照升級為高畫質，細節更豐富。',
      },
    ],
  },
  'colorize': {
    key: 'colorize',
    title: 'Colorize',
    description: '為黑白照片自動上色，重現精彩回憶。',
    icon: '🎨',
    image: '/demo_enhance_01.gif',
    category: 'AI Photo Editing',
    status: 'coming-soon',
    examples: [
      {
        image: '/examples/colorize-1.jpg',
        title: '黑白照上色',
        description: 'AI 還原舊照片色彩，重現經典時刻。',
      },
      {
        image: '/examples/colorize-2.jpg',
        title: '歷史照片復原',
        description: '讓家族回憶煥然一新。',
      },
    ],
  },
  'color-correct': {
    key: 'color-correct',
    title: 'Color Correction',
    description: '自動校正照片色彩，還原真實色調。',
    icon: '🌈',
    image: '/demo_enhance_01.gif',
    category: 'AI Photo Editing',
    status: 'coming-soon',
    examples: [
      {
        image: '/examples/color-correct-1.jpg',
        title: '校正偏色照片',
        description: 'AI 自動調整照片色彩，使其更接近真實。',
      },
      {
        image: '/examples/color-correct-2.jpg',
        title: '修復褪色老照片',
        description: '讓歷史照片重現光彩。',
      },
    ],
  },
  'lighting': {
    key: 'lighting',
    title: 'Lighting',
    description: '智慧調整照片光線，讓主體更突出。',
    icon: '💡',
    image: '/demo_enhance_01.gif',
    category: 'AI Photo Editing',
    status: 'coming-soon',
    examples: [
      {
        image: '/examples/lighting-1.jpg',
        title: '改善逆光人像',
        description: 'AI 自動調整光線，讓人像更清晰明亮。',
      },
      {
        image: '/examples/lighting-2.jpg',
        title: '提升室內照片質感',
        description: '讓室內照片看起來更有氛圍。',
      },
    ],
  },
  'replace': {
    key: 'replace',
    title: 'Replace',
    description: '替換照片中的物件或背景，創造新場景。',
    icon: '🔄',
    image: '/demo_enhance_01.gif',
    category: 'AI Photo Editing',
    status: 'coming-soon',
    examples: [
      {
        image: '/examples/replace-1.jpg',
        title: '背景更換',
        description: 'AI 自動替換照片背景，創造新視覺效果。',
      },
      {
        image: '/examples/replace-2.jpg',
        title: '物件移除',
        description: 'AI 自動移除照片中不需要的物件。',
      },
    ],
  },
  'remove': {
    key: 'remove',
    title: 'Object Removal',
    description: '一鍵移除照片中不需要的物件或人物。',
    icon: '🧹',
    image: '/demo_object_removeal_01.gif',
    category: 'AI Photo Editing',
    status: 'available',
    examples: [
      {
        image: '/examples/remove-1.jpg',
        title: '移除路人',
        description: 'AI 自動移除照片中不需要的路人。',
      },
      {
        image: '/examples/remove-2.jpg',
        title: '移除雜物',
        description: 'AI 自動移除照片中不需要的雜物。',
      },
    ],
  },
  'extender': {
    key: 'extender',
    title: 'Image Extender',
    description: '自動延展圖片邊界，補全缺失畫面。',
    icon: '🖼️',
    image: '/demo_enhance_01.gif',
    category: 'AI Photo Editing',
    status: 'coming-soon',
    examples: [
      {
        image: '/examples/extender-1.jpg',
        title: '補全模糊邊緣',
        description: 'AI 自動補全照片邊緣，使畫面更完整。',
      },
      {
        image: '/examples/extender-2.jpg',
        title: '延展風景照',
        description: 'AI 自動延展風景照，讓畫面更連貫。',
      },
    ],
  },
  'headshot': {
    key: 'headshot',
    title: 'Headshot Generator',
    description: 'AI 生成專業人像大頭照，適合履歷與社群。',
    icon: '🧑‍💼',
    image: '/demo_face_swap_01.webp',
    category: 'AI Avatar',
    status: 'coming-soon',
    examples: [
      {
        image: '/examples/headshot-1.jpg',
        title: '專業履歷照',
        description: 'AI 生成專業人像大頭照，適合求職使用。',
      },
      {
        image: '/examples/headshot-2.jpg',
        title: '社群頭像',
        description: 'AI 生成適合社群平台的個人頭像。',
      },
    ],
  },
  'studio': {
    key: 'studio',
    title: 'Studio Generator',
    description: 'AI 生成專業攝影棚風格人像。',
    icon: '🏢',
    image: '/demo_face_swap_01.webp',
    category: 'AI Avatar',
    status: 'coming-soon',
    examples: [
      {
        image: '/examples/studio-1.jpg',
        title: '專業攝影棚風格',
        description: 'AI 生成專業攝影棚風格的人像照片。',
      },
      {
        image: '/examples/studio-2.jpg',
        title: '商業攝影風格',
        description: 'AI 生成適合商業攝影的專業風格人像。',
      },
    ],
  },
  'avatar': {
    key: 'avatar',
    title: 'Avatar Generator',
    description: '創建個人化虛擬頭像，展現自我風格。',
    icon: '👤',
    image: '/demo_face_swap_01.webp',
    category: 'AI Avatar',
    status: 'coming-soon',
    examples: [
      {
        image: '/examples/avatar-1.jpg',
        title: '個人化頭像',
        description: 'AI 生成個人化的虛擬頭像，展現獨特風格。',
      },
      {
        image: '/examples/avatar-2.jpg',
        title: '社群頭像',
        description: 'AI 生成適合社群平台的個人頭像。',
      },
    ],
  },
  'face-swap': {
    key: 'face-swap',
    title: 'Face Swap',
    description: 'AI 臉部交換，趣味合成新形象。',
    icon: '😎',
    image: '/demo_face_swap_01.webp',
    category: 'AI Avatar',
    status: 'available',
    examples: [
      {
        image: '/examples/face-swap-1.jpg',
        title: '趣味合成',
        description: 'AI 將兩張照片中的人臉交換，創造趣味合成效果。',
      },
      {
        image: '/examples/face-swap-2.jpg',
        title: '專業人像交換',
        description: 'AI 將專業人像照片中的臉部交換，創造專業效果。',
      },
    ],
  },
  'face-edit': {
    key: 'face-edit',
    title: 'Face Edit',
    description: '智慧美顏與臉部細節調整。',
    icon: '😊',
    image: '/demo_face_swap_01.webp',
    category: 'AI Avatar',
    status: 'coming-soon',
    examples: [
      {
        image: '/examples/face-edit-1.jpg',
        title: '智慧美顏',
        description: 'AI 自動調整人像美顏，讓膚質更光滑。',
      },
      {
        image: '/examples/face-edit-2.jpg',
        title: '細節調整',
        description: 'AI 自動調整人像細節，如眼睛大小、鼻子長度等。',
      },
    ],
  },
  'video-enhance': {
    key: 'video-enhance',
    title: 'Video Enhance',
    description: 'AI 影片增強，提升畫質與細節。',
    icon: '🎬',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    category: 'AI Video Editing',
    status: 'available',
    examples: [
      {
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        title: '提升影片畫質',
        description: 'AI 自動增強影片畫質，提升細節與清晰度。',
      },
      {
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        title: '修復影片噪點',
        description: 'AI 自動移除影片噪點，使畫面更清晰。',
      },
    ],
  },
  'video-face-swap': {
    key: 'video-face-swap',
    title: 'Video Face Swap',
    description: 'AI 影片臉部交換，創造趣味短片。',
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    category: 'AI Video Editing',
    status: 'coming-soon',
    examples: [
      {
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        title: '趣味影片合成',
        description: 'AI 將兩段影片中的人臉交換，創造趣味合成效果。',
      },
      {
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        title: '專業影片交換',
        description: 'AI 將專業影片中的臉部交換，創造專業效果。',
      },
    ],
  },
  'video-style': {
    key: 'video-style',
    title: 'Video Style Transfer',
    description: 'AI 影片風格轉換，打造獨特視覺效果。',
    icon: '🎭',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    category: 'AI Video Editing',
    status: 'coming-soon',
    examples: [
      {
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        title: '風格轉換',
        description: 'AI 將影片轉換為不同風格，如印象派、油畫等。',
      },
      {
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        title: '色彩調整',
        description: 'AI 自動調整影片色彩，使其更符合特定風格。',
      },
    ],
  },
}; 