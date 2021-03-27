import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background: black;
  --headers: aliceblue;
  --text-white: white;
  --text-orange: orange;
  --text-hovers: orange;
  }
  * {
  background-color: var(--background);
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
  body {
    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  h1,
h2,
h3 {
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