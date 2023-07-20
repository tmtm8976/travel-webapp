import About from "./component/About";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
