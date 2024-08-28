import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastContainer from './components/common/Toast/ToastContainer';
import PAGE_ROUTES from './constants/pageRoutes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuestionDetailPage from './pages/QuestionDetailPage/QuestionDetailPage';
import NotFound from './pages/NotFound/NotFound';
import MainWrapper from './components/common/Wrapper/MainWrapper';

const client = new QueryClient();

export const router = createBrowserRouter(
  [
    {
      path: PAGE_ROUTES.main,
      element: (
        <MainWrapper>
          <App />
        </MainWrapper>
      ),
    },
    {
      path: `${PAGE_ROUTES.question}/:id`,
      element: (
        <Suspense fallback={<div>로딩중!</div>}>
          <MainWrapper>
            <QuestionDetailPage />
          </MainWrapper>
        </Suspense>
      ),
    },
    { path: '*', element: <NotFound /> },
  ],
  {
    basename: PAGE_ROUTES.main,
  },
);

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </StrictMode>,
  );
});

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <QueryClientProvider client={client}>
//       <RouterProvider router={router} />
//       <ToastContainer />
//     </QueryClientProvider>
//   </StrictMode>,
// );
