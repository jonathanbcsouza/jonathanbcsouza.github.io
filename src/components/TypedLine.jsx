import { useEffect, useState } from 'react';
import styled from 'styled-components';

/**
 * Typing is timed to a target duration rather than a fixed rate per
 * character, so a short line is not over before it registers and a long one
 * does not keep the reader waiting. Clamped at both ends so it never crawls
 * or flickers.
 */
const TARGET_MS = 1300;
const MIN_SPEED_MS = 16;
const MAX_SPEED_MS = 45;
const SESSION_KEY = 'jonathanbcsouza.introTyped';

const speedFor = (length) =>
  Math.min(
    MAX_SPEED_MS,
    Math.max(MIN_SPEED_MS, Math.round(TARGET_MS / Math.max(length, 1))),
  );

/**
 * Reserves the exact space the finished text will occupy.
 *
 * Typing into a normally-flowing paragraph grows it line by line and shoves
 * everything below down the page, which is the usual reason a typewriter
 * hero feels broken. A hidden copy at full length holds the box open and the
 * animated copy is laid over it, so nothing moves. visibility:hidden also
 * keeps this copy away from assistive technology.
 */
const Reserve = styled.span`
  display: block;
  visibility: hidden;
  /* Excluded from selection so copying the hero does not yield the sentence
     three times over, once from each layer. */
  user-select: none;
`;

const Wrap = styled.p`
  position: relative;
`;

const Typed = styled.span`
  position: absolute;
  inset: 0;
`;

/** Clipped rather than hidden, so the full sentence is always announced. */
const ForScreenReaders = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  user-select: none;
`;

const Caret = styled.span`
  display: inline-block;
  width: 0.5em;
  margin-left: 2px;
  border-bottom: 1.5px solid var(--text-orange);
  /* Blinks only while typing, then settles, so it does not pulse forever in
     the corner of the eye. */
  animation: ${(props) => (props.$blinking ? 'caret-blink 1s step-end infinite' : 'none')};

  @keyframes caret-blink {
    50% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const skipAnimation = () => {
  if (typeof window === 'undefined') return true;
  // Anyone who has asked for less motion gets the sentence immediately.
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
    return true;
  // And it plays once, so clicking back to Home does not replay it.
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
};

/**
 * Types a line out once, without moving the page or hiding it from anyone.
 *
 * This owns its own state on purpose. Driving the character count from the
 * page would re-render everything below it, the sketchpad included, roughly
 * seventy times a second.
 */
export const TypedLine = ({ text, className }) => {
  const [count, setCount] = useState(() => (skipAnimation() ? text.length : 0));

  useEffect(() => {
    // The initial state already holds the full text when animation is
    // skipped, so there is nothing to set here. Returning instead of calling
    // setState avoids a wasted render on every mount.
    if (skipAnimation()) return;

    let index = 0;
    const id = setInterval(() => {
      index += 1;
      setCount(index);
      if (index >= text.length) {
        clearInterval(id);
        try {
          window.sessionStorage.setItem(SESSION_KEY, '1');
        } catch {
          // Private browsing. It simply replays next time.
        }
      }
    }, speedFor(text.length));

    return () => clearInterval(id);
  }, [text]);

  const done = count >= text.length;

  return (
    <Wrap className={className}>
      <Reserve aria-hidden="true">{text}</Reserve>
      <Typed aria-hidden="true">
        {text.slice(0, count)}
        {!done && <Caret $blinking />}
      </Typed>
      <ForScreenReaders>{text}</ForScreenReaders>
    </Wrap>
  );
};
