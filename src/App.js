import logo from './logo.svg';
import './App.css';
import CryptoCurrencyInfo from './components/CryptoCurrencyInfo'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <CryptoCurrencyInfo />
    </div>
  );
}

export default App;
