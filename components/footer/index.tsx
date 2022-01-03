import { metadata } from 'config';
import { FiTwitter as Twitter } from 'react-icons/fi';
import { IoLogoGithub as Github } from 'react-icons/io';
import { SiUdemy as Udemy } from 'react-icons/si';

import Footprint from '@components/footprint';
import { leakedList } from '@shared/style-helpers';

import { footer } from './styles';

const Footer = () => (
  <footer css={footer}>
    <ul css={leakedList}>
      <li>
        <a
          aria-label="To Atila Fassina's github profile"
          href={metadata.author.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </li>
      <li>
        <a
          aria-label="To Atila Fassina's twitter profile"
          href={metadata.author.twitterUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          aria-label="To Atila Fassina's udemy profile"
          href={metadata.author.udemyUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Udemy />
        </a>
      </li>
    </ul>
    <Footprint />
  </footer>
);
export default Footer;
