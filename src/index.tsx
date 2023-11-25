import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import amplifyConfig from './amplifyconfiguration';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(amplifyConfig as unknown as any);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
