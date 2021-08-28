import Header from "./component/Header/Header";
import "./App.scss";
import SideBar from "./component/SideBar/SideBar";
import Body from "./component/Body/Body";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app__container">
        <Header />
        <section className="app__body">
          <SideBar />
          <Body />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
