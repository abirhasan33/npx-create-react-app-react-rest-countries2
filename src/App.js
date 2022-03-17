import logo from './logo.svg';
import './App.css';
import County from './componeents/Country/County';
import Footer from './componeents/Footer/Footer';
import Header from './componeents/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <County></County>
     <Footer></Footer>
    </div>
  );
}

export default App;
