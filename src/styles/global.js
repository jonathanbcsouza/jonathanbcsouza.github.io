import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --dark-red: rgb(27, 1, 1);
    --background-colour: linear-gradient(160deg, black, var(--dark-red));
    --headers: aliceblue;
    --text-white: white;
    --text-orange: orange;
    --text-hovers: orange;
  }
  
  body {
    background: var(--background-colour);
    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  * {
    z-index: 1;
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    scrollbar-visibility: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
  
  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }

  h1, h2, h3 {
    color: var(--headers);
  }
 
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  input, button {
    border-style: none;
  }
`;
