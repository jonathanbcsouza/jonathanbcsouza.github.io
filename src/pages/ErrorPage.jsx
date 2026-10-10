import { useRouteError, Link } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to="/">Back to home</Link>
    </div>
  );
}
