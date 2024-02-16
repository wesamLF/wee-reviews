import { useEffect } from 'react'
import './app.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/Nav/Nav'
import Home from './Pages/Home/components/Home'
import Footer from './components/Footer/Footer'
import ProductPage from './Pages/ProductPage/components/ProductPage'
import Market from './Pages/Market/components/Market'
import Register from './Pages/Register/components/Register'
import Login from "./Pages/Register/components/Login/Login"
import Signin from "./Pages/Register/components/Signin/Signin"
import { UserContext } from './context/UserContext'
import { CartContext } from './context/CartContext'
import { ToastContainer } from 'react-toastify';
import Account from './Pages/Account/components/Account'
import PrivateRoutes from './Util/PrivateRoutes'
import MyReviews from './Pages/Account/components/MyReviews/MyReviews'
import AboutUs from './Pages/AboutUs/components/AboutUs'
import Error404Page from './Pages/Error404/Error404Page'

function App() {
  const clientQuery = new QueryClient()

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <QueryClientProvider client={clientQuery}>
        <UserContext>
          <CartContext>
            <Nav />
            <Routes>
              <Route path='/home' element={<Home />} exact />
              <Route path='/market' element={<Market />} />
              <Route path='/Product/:id?' element={<ProductPage />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route element={<PrivateRoutes />}>
                <Route path='/account' element={<Account />} >
                <Route path='/account/myorders' element={<h1>still working on it!</h1>} />
                <Route path='/account/settings' element={<h1>still working on it!</h1>} />
                <Route path='/account/myreviews' element={<MyReviews />} />
                </Route>
              </Route>
              <Route path='/register' element={<Register />}>
                <Route path='login' element={<Login />} />
                <Route path='signin' element={<Signin />} />
              </Route>
              <Route path='*' element={<Error404Page/>} />

            </Routes>
            <Footer />
            
          </CartContext>
        </UserContext>
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}

export default App
