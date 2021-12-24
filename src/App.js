import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ProductList from './components/ProductList/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
