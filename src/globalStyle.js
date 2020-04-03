import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    
      :root {
      font-size: 24px;

      @media (min-width: 768px) {
        font-size: 18px};
      }

      @media (min-width: 1024px) {
        font-size: 16px;
      }
    }
    
    body {
        background-color: #4F4F4F;
        color: #FFFFFF;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
 `;

export default GlobalStyle;
