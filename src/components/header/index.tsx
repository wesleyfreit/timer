import { Clock, ScrollText } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
        <h1>Timer</h1>
      </div>
      <nav>
        <NavLink to="/" title="Temporizador">
          <Clock />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <ScrollText />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
