import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "react-redux";
import store from "./App/Store.ts";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
        <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </Provider>


)
