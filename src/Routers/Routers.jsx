import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Login, Payment, Report, Shop, SignUp } from '@/pages';
import Navbars from '@/layout/Navbar';

const Routers = () => {
  return (
    <div>
      <Navbars className ='mb-3'/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/report" element={<Report />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
