import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './app/router/router.tsx'
import { RouterProvider } from "react-router-dom";
import keycloak from './auth/keycloak.ts';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "antd/dist/reset.css"
import { store } from './app/store/store.ts';
import { Provider } from 'react-redux';

const queryClient = new QueryClient()

async function bootstrap() {
  try {
    const authenticated = await keycloak.init({
      onLoad: "login-required",
    });
    if (authenticated === true) {
      createRoot(document.getElementById('root')!).render(
        <StrictMode>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <RouterProvider router={router} />
            </Provider>
          </QueryClientProvider>
        </StrictMode>,
      )
    } else {
      <App />
    }
  } catch {
    console.log('Failed to initialize authetication.')
  }
}

bootstrap()