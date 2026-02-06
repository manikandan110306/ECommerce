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
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import Cart from './components/cart/Cart';

function App() {

  useEffect(() => {
    store.dispatch(loadUser);
  }, []);
  
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header/>
            <div className='container container-fluid'>
              <ToastContainer theme='dark'/>
              <Routes>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/register' element={<Register/>}/>

                <Route exact path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>

                <Route exact path='/myprofile' element={<ProtectedRoute> <Profile/> </ProtectedRoute>}/>
                <Route exact path='/myprofile/update' element={<ProtectedRoute> <UpdateProfile/> </ProtectedRoute>}/>
                <Route exact path='/myprofile/update/password' element={<ProtectedRoute> <UpdatePassword/> </ProtectedRoute>}/>

                <Route exact path='/password/forgot' element={<ForgotPassword/>}/>
                <Route exact path='/password/reset/:token' element={<ResetPassword/>}/>

                <Route exact path='/search/:keyword' element={<ProductSearch/>}/>
                <Route exact path='/product/:id' element={<ProductDetail/>}/>
                <Route exact path='/cart' element={<Cart/>}/>

                <Route path='*' element={<h1 className='text-center'>404 Not Found</h1>}/>
              </Routes>
            </div>
          <Footer/>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
