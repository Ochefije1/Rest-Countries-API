
import './App.css';

import Country from './components/country/country';
import {Layout } from './layout/layout';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes path="/">
      <Route index element={<Country/>}/>
      <Route path='detail' element={<CountryDetail/>}/>
    </Routes>
    </>

  );
}

export default App;
