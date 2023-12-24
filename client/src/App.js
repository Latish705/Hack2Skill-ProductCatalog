import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MerchantRegister from './pages/merchant/MerchantRegister';
import BuyerSignup from './pages/buyer/BuyerSignup';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Register' element={<MerchantRegister/>}/>
          <Route path='/BuyerSignup' element={<BuyerSignup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
