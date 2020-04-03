import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
export const Navigation = styled.div`
    a {
        margin: 0 ${props => props.theme.spacing.medium};
        color: ${props => props.theme.colors.primary};
    }
    
    a:hover {
        color: ${props => props.theme.colors.darkPrimary};
    }
    
    a.active:after {
        content: " 🍀‍";
    }
`;

export const Loader = styled.span`
    font-size: ${props => props.theme.fontSizes.large};
    margin-top: ${props => props.theme.spacing.large};
`;


export const ButtonX = styled(Button)`
    background: ${({primary, theme}) => primary ? theme.colors.primary : theme.colors.light};
    color: ${({primary, theme}) => primary ? theme.colors.light : theme.colors.primary};
    cursor: pointer;
    padding: 0.25em 1em;
    border: 2px solid ${props => props.theme.colors.white};
    border-radius: 3px;
`;

Button.propTypes = {
    primary: PropTypes.bool,
};