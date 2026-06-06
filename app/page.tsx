import Banner from '@/components/Banner';
import Board from '@/components/Board';
import HighLights from '@/components/HighLights';
import Story from '@/components/Story';
import Timeline from '@/components/Events';

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
