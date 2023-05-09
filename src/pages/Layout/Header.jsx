import React from 'react';
import { Link } from 'react-router-dom';

const navegation = [
  {
    name: 'Dasboard',
    href: '/',
    currenct: true,
  },
  {
    name: 'Saidas',
    href: '/outputs',
    currenct: false,
  },
];

function Header() {
  return (
    <header className="bg-[#181A1B] min-h-[60px] h-[5%] w-1/4 p-4 m-auto rounded-2xl">
      <nav className="flex flex-row gap-6 justify-center m-1">
        {navegation.map((nav) => (
          <Link to={nav.href} key={nav.name}>
            <span className="text-2xl">{nav.name}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
