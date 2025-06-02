import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import pageRoutes from '@routes/pageRoutes';
import ThemeProvider from '@styles/themeProvider';

import { queryClient } from '@/queryClient';
import '@styles/index.css';

const router = createBrowserRouter(pageRoutes);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
          <RouterProvider router={router} />
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
