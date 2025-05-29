import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import pageRoutes from '@routes/pageRoutes';
import ThemeProvider from '@styles/themeProvider';
import { rootStyle } from '@styles/global.css';

import { queryClient } from '@/queryClient';

const router = createBrowserRouter(pageRoutes);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className={rootStyle}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
