import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        light: '#FFFDF9',
        dark: '#36313D',
        primary: '#db7093',
        darkPrimary: '#DB4584',
        secondary: '#beb7a4',
        darkSecondary: '#bea484'
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '0.6em',
        medium: '1em',
        large: '1.4em'
    },
    spacing: {
        extraSmall: '0.25em',
        small: '0.5em',
        medium: '1em',
        large: '1.5em',
        extraLarge: '2em',
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
