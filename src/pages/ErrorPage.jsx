import { useRouteError, Link } from 'react-router-dom';

// Reached only when a route throws while rendering. Unknown URLs are handled
// by the NotFound route, so this is a real fault, and it stands alone because
// the shell it would normally sit in may be the thing that failed.
export function ErrorPage() {
  const error = useRouteError();

  return (
    <main className="error-page">
      <h1>Something went wrong</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error?.statusText || error?.message ? (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      ) : null}
      <Link to="/">Back to home</Link>
    </main>
  );
}
