import Logo from '@components/logo';

import { container, title } from './styles';

export const Header = () => (
  <header css={container}>
    <Logo />
    <h1 css={title}>devlog</h1>
  </header>
);
