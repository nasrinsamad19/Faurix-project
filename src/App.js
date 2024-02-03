import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Brands from './Components/Brands/Brands';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Items from './Components/Items/Items';
import Products from './Components/Products/Products';
import Service from './Components/Service/Service';
import Team from './Components/Team/Team';
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
        <Service/>
      </div>
      
      <div>
        <About/>
      </div>
      <div>
        <Team/>
      </div>
      <div>
        <Gallery/>
        <Blogs/>
        
      </div>
      <div>
        <Footer/>
      </div>
      
      
    </div>
  );
}

export default App;
