import Header from "./component/Header/Header";
import "./App.scss";
import SideBar from "./component/SideBar/SideBar";
import Body from "./component/Body/Body";
function App() {
  return (
    <div className="app__container">
      <Header />
      <section className="app__body">
        <SideBar />
        <Body />
      </section>
    </div>
  );
}

export default App;
