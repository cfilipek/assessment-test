import Hero from './components/Hero';
import Releases from './components/Releases';
import Tour from './components/Tour';
import Videos from './components/Videos';
import Store from './components/Store';
import Photos from './components/Photos';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <div className="home">
      <Hero />
      <Releases />
      <Tour />
      <Videos />
      <Store />
      <Photos />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
