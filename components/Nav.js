import Link from 'next/Link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

import discord from '../public/discord.png';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#how">How does it work ?</Link>
        </li>
        <li>
          <Link href="/add-sentence">Propose a sentence</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
