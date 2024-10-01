"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from 'next-themes';

const links = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#contact",
    label: "Contact",
  }
]

const Navbar: React.FC = () => {
    const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-20">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-lg font-bold text-gray-900 dark:text-white">
          <a href='#'>My Portfolio</a>
        </div>
        <ul className="flex space-x-4">
          {links.map((link)=>{
            return (
              <li key={link.href}>
                <a href={link.href} className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
        <button
          onClick={toggleTheme}
          className="text-gray-900 dark:text-white focus:outline-none"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
