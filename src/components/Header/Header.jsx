import React from 'react';
import { HeaderWrapper } from './styled';


function Header() {
  return (
    <HeaderWrapper>
      <h1>
        Investment app
        <span aria-label="chart going up" role="img">📈</span>
      </h1>
    </HeaderWrapper>
  );
}

export default Header;
