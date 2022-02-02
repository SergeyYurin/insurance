import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Testimonials />
      <Contacts />
    </>
  );
}

export default App;
