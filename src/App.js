import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeRouter from "./routes/HomeRouter";
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  // react-query

  const queryClient = new QueryClient();

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<HomeRouter />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;