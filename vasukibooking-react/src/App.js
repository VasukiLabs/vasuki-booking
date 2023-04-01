import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/layout';
import InjectedCheckoutForm from './components/Layout/CheckoutForm';
import Payment from './components/Stripe/Payment';
import { useEffect, useState } from 'react';
import ServiceSelection from './components/ServiceSelection';
import SlotBooking from './components/SlotBooking';
import YourInformation from './components/Information';
import { Provider } from 'react-redux';
import store from './app/store';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  useEffect(() => {
    console.log(selectedMenu)
  }, [selectedMenu])

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout selectedMenu={selectedMenu}>
          {selectedMenu === 0 && <ServiceSelection setSelectedMenu={setSelectedMenu} />}
          {selectedMenu === 1 && <SlotBooking setSelectedMenu={setSelectedMenu} />}
          {selectedMenu === 2 && <YourInformation setSelectedMenu={setSelectedMenu} />}
          {selectedMenu === 3 && <Payment setSelectedMenu={setSelectedMenu} />}
        </Layout>
      </ChakraProvider>
    </Provider>
    // <Payment />
  );
}

export default App;
