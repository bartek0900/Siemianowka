import Center from './components/Center';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoMapka from './components/InfoMapka';
import Body from './components/Body';
import Opis from './components/Opis';
import Sidebar from './components/Sidebar';
import Oferta from './components/Oferta';
import Opis2 from './components/Opis2';
import Atrakcje from './components/Atrakcje';
import Gallery from './components/Gallery';
import Cennik from './components/Cennik';

function App() {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  
  return (
    <div class="Kontener">
    <Sidebar />
    <Header />
    <Center />
    <Opis />
    <Body />
    <Atrakcje />
    <Opis2 />
    <Gallery />
    <Cennik />
    <InfoMapka />
    <Footer />
  </div>
  );
}

export default App;
