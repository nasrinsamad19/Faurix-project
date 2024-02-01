import './App.css';
import Brands from './Components/Brands/Brands';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Items from './Components/Items/Items';
import Services from './Components/services/Services';
function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Hero/>
      </div>
      <div>
        <Items/>
        <Brands/>
      </div>
      <div>
        <Services/>
        
      </div>
      
    </div>
  );
}

export default App;
