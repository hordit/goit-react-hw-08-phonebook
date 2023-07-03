import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    navLink: '#319AA0',
    activeNavLink: '#01191F',
  },
  backgroundColor: {
    appBar: '#022A39',
    activeNavLink: '#319AA0',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
