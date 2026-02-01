import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/product/ProductDetail';
import ProductSearch from './components/product/ProductSearch';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header/>
            <div className='container container-fluid'>
              <ToastContainer theme='dark'/>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/search/:keyword' element={<ProductSearch/>}/>
                <Route exact path='/product/:id' element={<ProductDetail/>}/>
              </Routes>
            </div>
          <Footer/>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
