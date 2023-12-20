import './App.css'
import About from './components/About';
import Blog from './components/Blog';
import Demo from './components/Demo';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Services from './components/Services';
import AlgoFooter from './components/AlgoFooter';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      <Demo />
      <AlgoFooter />
    </>
  );
}

export default App;
