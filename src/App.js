import Header from "./component/Header/Header";
import "./App.scss";
import SideBar from "./component/SideBar/SideBar";
function App() {
  return (
    <div className="app__container">
      <Header />
      <section className="app__body">
        <SideBar />
        <div className="hello">ok</div>
      </section>
    </div>
  );
}

export default App;
