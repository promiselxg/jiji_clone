import BodyWrapper from './components/Body';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <>
      <div className="flex flex-col w-full bg-[#EBF2F7]">
        <DataProvider>
          <Header />
          <BodyWrapper />
          <Footer />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
