import React, { Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/other/News';
import About from './components/other/About';
import HomeRouter from "./routes/HomeRouter";
import Modal from './components/modals/Modal';
import { persistor, store } from './redux/store';
import Products from './components/other/Products';
import ScrollToTop from './components/ScrollToTop';
import Categories from './components/other/Categories';
import ProductItem from './components/other/ProductItem';
import ContactModal from './components/modals/ContactModal';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavouriteProducts from './components/other/FavouriteProducts';

const App = () => {

  // react-query

  const queryClient = new QueryClient();

  // modal

  const [showModal, setShowModal] = useState(false);

  function changeModal() {
    setShowModal(!showModal)
  };

  // contact-modal

  const [prodValue, setProdValue] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);

  function changeContactModal() {
    setShowContactModal(!showContactModal)
  };

  function changeProdValue(item) {
    setProdValue(item);
    changeContactModal();
  };

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <ScrollToTop />
              <Navbar changeProdValue={changeProdValue} />
              <Routes>
                <Route path='/' element={<HomeRouter changeProdValue={changeProdValue} />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/about' element={<About />} />
                <Route path='/categories/:id' element={<Categories />} />
                <Route path='/likes' element={<FavouriteProducts changeProdValue={changeProdValue} />} />
                <Route path='/products' element={<Products changeProdValue={changeProdValue} />} />
                <Route path='/sub-categories/:id' element={<Products changeProdValue={changeProdValue} />} />
                <Route path='/products/:id' element={<ProductItem changeProdValue={changeProdValue} />} />
                <Route path='/news/:id' element={<News />} />
              </Routes>
              <Footer />
              {showModal &&
                <Modal changeModal={changeModal} />
              }
              {showContactModal &&
                <ContactModal changeModal={changeModal} changeContactModal={changeContactModal} prodValue={prodValue} />
              }
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;