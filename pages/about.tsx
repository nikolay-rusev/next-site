import Image from 'next/image';
import { FaReact as ReactIcon } from 'react-icons/fa';

import { css, keyframes } from '@emotion/react';
import Page from '@layouts/page';

const rotate = keyframes`
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
`;

const header = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2ch;
`;

const pilotPicture = css`
  border-radius: 50%;
`;

const title = css`
  font-weight: 200;
  font-size: 2rem;
`;

const reactIconStyles = css`
  margin-left: 1ch;
  position: relative;
  top: 5ch;
  color: var(--color-accent);
  animation: ${rotate} 5s linear infinite;
`;

const bio = css`
  margin-top: 5ch;

  p {
    max-width: 60ch;
    margin: 0 auto;
  }

  > p + p {
    margin-top: 3ch;
  }
`;

const footer = css`
  margin-top: 5ch;
  margin-right: 5ch;
  text-align: right;
`;

const About = () => (
  <Page>
    <section css={header}>
      <Image
        css={pilotPicture}
        src="/peter-quill.jpg"
        width={225}
        height={300}
        alt=""
      />
      <h2 css={title}>
        <span>Star Lord</span>
        <ReactIcon css={reactIconStyles} />
      </h2>
    </section>
    <section css={bio}>
      <p>
        Peter Jason Quill is a Celestial-human hybrid who was abducted from
        Earth in 1988 by the Yondu Ravager Clan, and afterwards began building a
        reputation as the notorious intergalactic outlaw, nicknamed Star-Lord.
      </p>
      <p>
        In 2014, he decided to leave the Ravagers and operate individually,
        starting by stealing a precious artifact known as the Orb,
        unintentionally becoming a key player in the Quest for the Orb.
        Following his arrest, he forged an uneasy alliance with fellow inmates
        Gamora, Drax the Destroyer, Rocket Raccoon, and Groot, who together
        formed the Guardians of the Galaxy.
      </p>
    </section>
    <section css={footer}>
      <small>Source: </small>
      <a
        href="https://marvelcinematicuniverse.fandom.com/wiki/Star-Lord"
        rel="noopener noreferrer"
        target="_blank"
      >
        Marvel Cinematic Universe Wiki
      </a>
    </section>
  </Page>
);

export default About;
