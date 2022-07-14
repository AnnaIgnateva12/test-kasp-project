import { useState } from 'react';
import './App.css';
import BuyBlock from './components/buyBlock/BuyBlock';
import Header from './components/header/Header';
import List from './components/list/List';
import MainText from './components/mainText/MainText';

function App() {

  const [currency, setCurrency] = useState('GBP')

  return (
    <div className="App">
      <div className='Main'>
        <Header setCurrency={setCurrency} />
        <MainText />
        <List />
      </div>
      <BuyBlock currency={currency} />
      <div style={{ height: '2000px' }} />
    </div>
  );
}

export default App;
