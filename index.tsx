import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Unregister any existing service workers to ensure clean state
// Wrapped in load event to prevent "The document is in an invalid state" errors
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    }).catch(error => {
      console.warn("Service worker unregistration failed:", error);
    });
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);