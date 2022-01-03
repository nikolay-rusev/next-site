import Link from 'next/link';
import { GiAstronautHelmet as Astrounaut } from 'react-icons/gi';

import { leakedList } from '@shared/style-helpers';

const Navigation = () => (
  <nav css={leakedList}>
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
