
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const pathname = usePathname(); // Get the current path
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Projects', path: '/Project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-[#0F4B6E] to-[#2A3D34] text-white shadow-md p-6 sticky">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1
          className="text-3xl font-extrabold tracking-tight text-[#E1B16F]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          AI Agent Developer
        </motion.h1>

        <motion.nav
          className="hidden md:flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path} className="relative group">
                <Link href={item.path}>
                  <span
                    className={`text-lg transition-all duration-300 ${
                      pathname === item.path ? 'text-[#E1B16F]' : 'hover:text-[#E1B16F]'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
                {pathname === item.path && (
                  <motion.div
                    className="absolute left-0 bottom-0 h-[2px] bg-[#E1B16F]"
                    layoutId="underline"
                    initial={false}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <motion.div
                  className="absolute left-0 bottom-0 h-[2px] bg-[#E1B16F]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </li>
            ))}
          </ul>
        </motion.nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl hover:text-[#E1B16F] focus:outline-none">
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.nav
          className="mt-4 md:hidden bg-[#2A3D34] text-white space-y-4 rounded-md p-4 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-4 text-lg">
            {navItems.map((item) => (
              <li key={item.path} onClick={() => setMenuOpen(false)}>
                <Link href={item.path}>
                  <span
                    className={`transition-all duration-300 ${
                      pathname === item.path ? 'text-[#E1B16F]' : 'hover:text-[#E1B16F]'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;






