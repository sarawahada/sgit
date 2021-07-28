import "./App.css";
import Navbar from "./navbar";
import Footer from "./Footer";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Navbar color="#52b788" />
      <div className="image-header">
        <div
          className="background"
          style={{
            backgroundImage: `url("https://www.taskade.com/static_images/templates/pexels-startup-stock-photos-7097.jpg")`,
          }}
        >
          <div className="image-mask">
            <h1>Explore our Organisation</h1>
          </div>
        </div>
      </div>
      {/* <div className="sup-triangle"></div> */}
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="inf-triangle"></div>
      <Footer />
    </div>
  );
}

export default App;
