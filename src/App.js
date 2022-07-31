import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbarr from './pages/shared/Navbarr';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Homee/Home';
import Gallery from './pages/Gallery/Gallery';
import Services from './pages/Services/Services';
import ServiceDetails from './pages/Services/ServiceDetails';
import Contact from './pages/shared/Contact';
import Login from './pages/shared/Login';
import Registration from './pages/shared/Registration';
import RequireAuth from './pages/shared/RequireAuth';
import DashBoard from './pages/DashBoard/DashBoard';
import Order from './pages/DashBoard/Order';
import MyReview from './pages/DashBoard/MyReview';
import About from './pages/About/About';
import Footer from './pages/shared/Footer';

function App() {
  return (
    <div>
      <Navbarr></Navbarr>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/gallary' element={<Gallery></Gallery>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/services' element={
          <RequireAuth>
            <Services/>
          </RequireAuth>
        }>
        </Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard/>
          </RequireAuth>
        }>
          <Route index element={<Order></Order>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/services/:id' element={<ServiceDetails></ServiceDetails>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
