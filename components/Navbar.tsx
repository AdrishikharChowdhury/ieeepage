"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/constants';

const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="flex items-center justify-between bg-white rounded-2xl px-6 py-4">
        <Link href="/" className="flex items-center justify-center gap-2 shrink-0">
          <Image src='/logo.png' alt='IEEE STCET SB' width={100} height={50} className="object-cover" />
          <span className="text-2xl font-bold leading-none tracking-tight ">
            <span className="text-ieee-blue">IEEE</span> STCET SB
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, route, id }) => {
            const isActive = pathname === route || (pathname === '/' && hash === `#${id}`);
            return (
              <li key={route}>
                <Link
                  href={pathname === '/' ? `#${id}` : route}
                  onClick={(e) => handleClick(e, id)}
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
            className="bg-ieee-blue text-white text-md font-medium px-8 py-5 rounded-xl transition-opacity hover:opacity-90 leading-none"
          >
            Stories
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
