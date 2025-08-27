import { Suspense, type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from '@pages/loading/Loading';
import Error from '@pages/error/Error';

interface Props {
  children: ReactNode;
}

export function GlobalErrorBoundary({ children }: Props) {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
