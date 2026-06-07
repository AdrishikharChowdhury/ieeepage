import dynamic from 'next/dynamic';
import Banner from '@/components/Banner';

const Story = dynamic(() => import('@/components/Story'), { ssr: true });
const Timeline = dynamic(() => import('@/components/Events'), { ssr: true });
const Board = dynamic(() => import('@/components/Board'), { ssr: true });
const HighLights = dynamic(() => import('@/components/HighLights'), { ssr: true });

export default function Home() {
  return (
    <>
      <Banner />
      <Story />
      <Timeline />
      <Board />
      <HighLights />
    </>
  );
}
