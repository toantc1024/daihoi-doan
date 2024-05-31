import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/global/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/global/Footer";

function App() {
  return (
    <>
      <Navbar />
      {
        // Routes
        <HomePage />
      }
      <Footer />
    </>
  );
}

export default App;
