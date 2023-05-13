import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  
import { MemoryContextProvider } from './contexts/MemoryContext';
import { UserContextProvider } from './contexts/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <MemoryContextProvider>
        <App />
      </MemoryContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
