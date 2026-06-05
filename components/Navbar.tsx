"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home', route: '/', id: 'home' },
  { label: 'Our Story', route: '/story', id: 'story' },
  { label: 'Timeline', route: '/timeline', id: 'timeline' },
  { label: 'The Board', route: '/board', id: 'board' },
  { label: 'Highlights', route: '/highlights', id: 'highlights' },
];

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
    <nav className='w-full px-12 py-6 flex justify-between items-center shadow-xl z-100 bg-white'>
      <Link href="/" className="flex items-center gap-2 font-bold text-4xl h-auto">
        <Image src='/logo.png' alt='logo' width={120} height={100} className='' />
        <p className='flex gap-2 items-center' >
          <span className="font-extrabold text-blue-700" >IEEE</span>
          <span>STCET SB</span>
        </p>
      </Link>
      <ul className='flex gap-8 items-center'>
        {links.map(({ label, route, id }) => {
          const isActive = pathname === route || (pathname === '/' && hash === `#${id}`);
          return (
            <li key={route}>
              <Link
                href={pathname === '/' ? `#${id}` : route}
                onClick={(e) => handleClick(e, id)}
                className={`relative pb-1.5 group transition-colors duration-300 ${
                  isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href="/stories"
        className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300'
      >
        Stories
      </Link>
    </nav>
  )
}

export default Navbar
