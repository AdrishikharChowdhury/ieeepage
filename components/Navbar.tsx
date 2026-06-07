"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/constants';
import Dock, { type DockItemData } from './Dock';
import { Home, BookOpen, Calendar, Users, ImageIcon } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={20} />,
  "Our Story": <BookOpen size={20} />,
  Events: <Calendar size={20} />,
  "The Board": <Users size={20} />,
  Highlights: <ImageIcon size={20} />,
};

const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  const handleClick = (id: string) => {
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const dockItems: DockItemData[] = navLinks.map(({ label, route, id }) => ({
    icon: <span className={pathname === route || (pathname === '/' && hash === `#${id}`) ? 'text-ieee-blue' : 'text-ink/60'}>{iconMap[label] || <Home size={20} />}</span>,
    label: <span className={pathname === route || (pathname === '/' && hash === `#${id}`) ? 'text-ieee-blue font-semibold' : ''}>{label}</span>,
    onClick: () => {
      if (pathname === '/') {
        handleClick(id);
      } else {
        window.location.href = route;
      }
    },
  }));

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4"
      >
        <div className="flex items-center justify-between bg-white rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="flex items-center justify-center gap-1.5 sm:gap-2 shrink-0">
            <Image src='/logo.png' alt='IEEE STCET SB' width={100} height={50} className="size-9 sm:size-16 object-contain" />
            <span className="text-xs sm:text-lg md:text-2xl font-bold leading-none tracking-tight">
              <span className="text-ieee-blue">IEEE</span> STCET SB
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, route, id }) => {
              const isActive = pathname === route || (pathname === '/' && hash === `#${id}`);
              return (
                <li key={route}>
                  <Link
                    href={pathname === '/' ? `#${id}` : route}
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault();
                        handleClick(id);
                      }
                    }}
                    className={`text-md font-medium duration-200 hover:text-ieee-blue ${isActive ? 'text-ieee-blue' : "text-ink transition-colors"}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/blogs"
              className="bg-ieee-blue text-white text-xs sm:text-sm md:text-md lg:text-lg font-medium px-3 py-3 sm:px-6 md:px-6 md:py-4 transition-opacity hover:opacity-90 leading-none"
            >
              Blogs
            </Link>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
      >
        <Dock items={dockItems} panelHeight={56} baseItemSize={44} magnification={56} distance={120} />
      </motion.div>
    </>
  );
};

export default Navbar;
