import './App.css';
import { useState } from 'react';
import logo from './logo.svg';
import Calculator from './Calculator.js'

function App() {

    const [tekst, setTekst] = useState('');
    const [show, setShow] = useState(false);
    const [suma, setSuma] = useState(0);
    const zmienna = 4;
    const text = "qwjwqewqewqewqewq";

    const s = [];
  

    const sumuj = (liczba) => {
        const sumaPlusLiczba = suma + liczba;
        setSuma(sumaPlusLiczba);
    } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  To jest nasza suma: {suma}  
              <button onClick={() => setShow(!show)}> Nacisnij </button>
              {show && <Calculator sumuj={sumuj} text={'Helloooo'} />}
      </header>
    </div>
  );
}

export default App;
