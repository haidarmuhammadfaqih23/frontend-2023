import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Movies />
      <Create />
      <Footer />
    </>
  );
}

export default App;
