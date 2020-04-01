import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    margin-top: 100px;
`;

function Header() {
    return(
        <HeaderWrapper>
            <h1>Investment app <span aria-label="chart going up" role="img">📈</span></h1>
        </HeaderWrapper>
    )
}

export default Header;