import Navbar from "./components/Navbar";
import Background from "./components/Background";
import MainTextHomePage from "./components/MainTextHomePage/Index";
import Catalogo from "./components/Catalogo";
import Footer from "./components/Footer";

function App() {
  return (
  <>
    <Background>
    <Navbar />
    <MainTextHomePage />
    </Background>

    <Catalogo />

    <Footer />
  </>
  );
}

export default App;
