import styled from 'styled-components';
import PropTypes from 'prop-types';
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
    color: #e6af2e;
    font-size: 18px;
    margin-top: 16px;
`;


export const Button = styled.button`
    background: ${props => props.primary ? '#db7093' : '#ffffff'};
    color: ${props => props.primary ? '#ffffff' : '#db7093'};
    cursor: pointer;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

Button.propTypes = {
    primary: PropTypes.bool,
};