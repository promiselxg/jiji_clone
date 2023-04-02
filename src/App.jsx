import BodyWrapper from './components/Body';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <div className="flex flex-col w-full bg-[#EBF2F7]">
        <Header />
        <BodyWrapper />
      </div>
    </>
  );
}

export default App;
