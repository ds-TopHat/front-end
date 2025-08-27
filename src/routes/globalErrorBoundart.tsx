import { Suspense, type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from '@pages/loading/Loading';

import { ErrorPage } from './lazy';

interface Props {
  children: ReactNode;
}

export function GlobalErrorBoundary({ children }: Props) {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
