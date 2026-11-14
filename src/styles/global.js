import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background-colour: linear-gradient(160deg, black, var(--dark-red));
    --dark-red: rgb(27, 1, 1);
    --headers: aliceblue;
    --text-hovers: orange;
    --text-orange: orange;
    --text-white: white;

    /* One vertical rhythm for every page. These were previously vh values set
       per page, so the gap above each heading grew on taller windows. */
    --page-top: 56px;
    --page-bottom: 80px;
    --nav-height: 50px;

    /* Dark native scrollbars, select popups and form controls. */
    color-scheme: dark;
  }

  html {
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  @media (max-width: 615px) {
    :root {
      --page-top: 28px;
      --page-bottom: 56px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--background-colour);
    background-attachment: fixed;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: var(--text-white);
  }

  /* Sticky footer: the footer sits after the content, and is pushed to the
     bottom of the viewport when a page is short. It used to be position:fixed,
     which permanently covered the end of the longer pages. */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1 0 auto;
  }

  @media (max-width: 615px) {
    /* The navbar is fixed at this width, so content needs its height back. */
    main {
      padding-top: var(--nav-height);
    }
  }

  /* Form controls do not inherit the page font by default, which is why the
     tabs, buttons and selects rendered in a different face from the text. */
  button, select, input, textarea {
    font: inherit;
  }

  h1, h2, h3 {
    color: var(--headers);
  }

  /* Anyone who asks the OS for less motion gets none, site wide. The typed
     intro and the card lift also check this themselves, so they still behave
     if this rule is ever removed. */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  a {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid var(--text-orange);
    outline-offset: 3px;
  }

  .error-page {
    display: flex;
    padding: 24px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    min-height: 100vh;

    a {
      display: inline-block;
      padding: 12px;
      color: var(--text-orange);
    }
  }
`;
