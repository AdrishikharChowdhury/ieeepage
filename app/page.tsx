import Banner from '@/components/Banner';
import Story from '@/components/Story';
import Timeline from '@/components/Events';
import Board from '@/components/Board';
import HighLights from '@/components/HighLights';

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
