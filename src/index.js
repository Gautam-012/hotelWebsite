import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AuthProvider from "../src/components/hooks/useAuth"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
