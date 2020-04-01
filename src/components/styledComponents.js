import styled from 'styled-components';

export const Navigation = styled.div`
    a {
        margin: 0 10px;
        color: #db7093;
    }
    
    a:hover {
        color: #f73172!important;
    }
    
    a.active:after {
        content: " 🍀‍";
    }
`;


export const Loader = styled.span`
    color: #E6AF2E;
    font-size: 18px;
    margin-top: 16px;
`;