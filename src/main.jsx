// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './hooks/useAuth.jsx';
// import { ErrorBoundary } from 'react-error-boundary';

// function ErrorFallback({ error }) {
//   return (
//     <div role="alert" className="text-red-500 p-4">
//       <h2>Something went wrong:</h2>
//       <pre>{error.message}</pre>
//       <button
//         onClick={() => window.location.reload()}
//         className="mt-2 bg-blue-500 text-white p-2 rounded"
//       >
//         Refresh Page
//       </button>
//     </div>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <ErrorBoundary FallbackComponent={ErrorFallback}>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </ErrorBoundary>
//   </BrowserRouter>
// );

import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div role="alert" className="max-w-md w-full bg-gray-900 border border-red-500/30 rounded-lg p-6">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <pre className="text-sm text-red-300 whitespace-pre-wrap break-words">
              {error.message}
            </pre>
          </div>
          <div className="space-y-3">
            <button
              onClick={resetErrorBoundary}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500/50"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Clear any stored authentication data on error reset
        localStorage.removeItem('authToken');
        window.location.href = '/auth';
      }}
    >
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);