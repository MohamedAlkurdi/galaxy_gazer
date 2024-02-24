import './App.css';
import './index.css';
import Navbar from './components/navbar';
import Main from './pages/main';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './components/footer';
import Account from './pages/account';
import AstronomicalSerice from './pages/astronomicalService';
import { services_data } from './services_data';
import NotFound from './pages/notFound';
function App() {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [currentLocation,setCurrentLocation] = useState('/');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setIsSubscribing(path === '/account');
    setCurrentLocation(path);
  }, [location.pathname]);

  const servicesRoutes = services_data.map((item => {
    return <Route path={`${item.route_path}`} element={<AstronomicalSerice currentLocation={currentLocation} />} />
  }))

  return (
    <div className='App lighter_bg h-screen'>
      {isSubscribing ? '' : <Navbar />}
      <Routes>
        <Route index element={<Main />} />
        <Route path='/account' element={<Account />} />
        {servicesRoutes}
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {isSubscribing ? '' : <Footer />}
    </div>
  );
}

export default App;
