import { notFound } from 'next/navigation';
import { toolData } from '../toolData';
import ToolDetail from '../ToolDetail';

interface ToolPageProps {
  params: { tool: string };
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = toolData[params.tool];

  if (!tool) {
    notFound();
  }

  return <ToolDetail tool={tool} />;
} 