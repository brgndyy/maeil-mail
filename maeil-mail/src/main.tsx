import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastContainer from './components/common/Toast/ToastContainer';

const client = new QueryClient();

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
        <ToastContainer />
        <App />
      </QueryClientProvider>
    </StrictMode>,
  );
});

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <QueryClientProvider client={client}>
//       <App />
//     </QueryClientProvider>
//   </StrictMode>,
// );
