import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header/>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
            </Routes>
          <Footer/>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
