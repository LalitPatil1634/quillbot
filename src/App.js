import './App.css';
import { Cards } from './components/Cards';
import { Details } from './components/Details';
import { Header } from './components/Header';
import { Sliders } from './components/Sliders';

function App() {
  return (
    <div className='outerDiv'>
      <Header />
      <Sliders />
      <Cards />
      <Details />
    </div>
  );
}

export default App;
