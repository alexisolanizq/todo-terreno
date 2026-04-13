import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'src/assets/styles/index.css'
import 'remixicon/fonts/remixicon.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import router from './router'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position='top-right' autoClose={2500} />
    </QueryClientProvider>
  </StrictMode>,
)
