import Link from 'next/link';
import { GiAstronautHelmet as Astrounaut } from 'react-icons/gi';

import { navigationStyles } from './styles';

const Navigation = () => (
  <nav css={navigationStyles}>
    <Link href="/">
      <a aria-label="Back to home">
        <Astrounaut />
      </a>
    </Link>
    <Link href="/about">
      <a>about</a>
    </Link>
  </nav>
);

export default Navigation;
