import Banner from '@/components/Banner';
import Story from '@/components/Story';
import Footer from '@/components/Footer';
import { StatCard } from '@/components/ui/StatCard';
import { BlogCard } from '@/components/ui/BlogCard';
import { LogoStrip } from '@/components/ui/LogoStrip';
import { stats, blogPosts, partnerLogos } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <Banner />
      <Story />
    </>
  );
}
