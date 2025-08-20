import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth.jsx';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div role="alert" className="text-red-500 p-4">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button
        onClick={() => window.location.reload()}
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        Refresh Page
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </BrowserRouter>
);