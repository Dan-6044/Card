
import "./App.css";
import Info from './components/information/info';
import About from './components/About/About';
import Interests from './components/Interests/Interests';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='App'>
      <div className='Container'>
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      </div>

    </div>
  )
}

export default App
