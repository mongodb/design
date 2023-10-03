import { signIn } from 'next-auth/react';

export default function Unauthorized() {
  return (
    <div className="row">
      <div className="col-lg-10 col-offset-1">
        <p>
          Hey There, looks like you reached an area you don&apos;t have access
          to.
        </p>

        <p>Please sign in here.</p>

        <p>
          <button className="btn btn-secondary" onClick={() => signIn('okta')}>
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
