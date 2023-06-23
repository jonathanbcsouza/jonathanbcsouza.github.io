import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --background-colour: linear-gradient(160deg, black, var(--dark-red));
    --dark-red: rgb(27, 1, 1);
    --headers: aliceblue;
    --text-hovers: orange;
    --text-orange: orange;
    --text-white: white;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--background-colour);
    min-height: 100vh;
    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  h1, h2, h3 {
    color: var(--headers);
  }
  
  a {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`
