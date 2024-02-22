import './App.css';
import {Country, CountryDetail} from './components/country/country';
import {layout } from './layout/layout';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <layout>
        <Routes >
          <Route path="/" element={<Country/>} />
          <Route path='/detail' element={<CountryDetail/>} />
        </Routes>
      </layout>
    </div>

  );
}

export default App;
