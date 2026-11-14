import { useEffect, useRef } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NOT_FOUND_TITLE, titleForPath } from './data/siteRoutes';

const SkipLink = styled.a`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;
  padding: 10px 14px;
  border-radius: 6px;
  background: var(--text-orange);
  color: black;
  font-weight: 600;
  text-decoration: none;
  transform: translateY(-200%);

  &:focus {
    transform: none;
  }
`;

const Main = styled.main`
  &:focus {
    outline: none;
  }
`;

/**
 * What a full page load does for free and a client side navigation does not:
 * a new title, focus moved to the new content, and scroll back to the top.
 * Without it a screen reader user clicks a link and hears nothing, and every
 * tab shows the same title.
 */
const useRouteChange = (mainRef) => {
  const { pathname } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    document.title = titleForPath(pathname) ?? NOT_FOUND_TITLE;

    // The first render is a page load, and the browser handles focus there.
    if (first.current) {
      first.current = false;
      return;
    }
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, mainRef]);
};

export const App = () => {
  const mainRef = useRef(null);
  useRouteChange(mainRef);

  return (
    <>
      <SkipLink
        href="#main"
        onClick={(event) => {
          // Focus directly rather than following the hash, which would leave
          // "#main" in the address bar and in the history.
          event.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Skip to content
      </SkipLink>
      <Navbar />
      <Main id="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </Main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};
