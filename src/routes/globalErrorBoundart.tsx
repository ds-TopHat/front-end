import { Suspense, type ReactNode } from 'react';
import Loading from '@pages/loading/Loading';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorPage } from './lazy';

interface GlobalErrorBoundaryProps {
  children: ReactNode;
}

export function GlobalErrorBoundary({ children }: GlobalErrorBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
