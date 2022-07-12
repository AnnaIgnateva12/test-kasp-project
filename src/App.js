import './App.css';
import BuyBlock from './components/buyBlock/BuyBlock';
import Header from './components/header/Header';
import MainText from './components/mainText/MainText';

function App() {
  return (
    <div className="App">
      <div className='Main'>
        <Header />
        <MainText />
        <BuyBlock />
      </div>
    </div>
  );
}

export default App;
