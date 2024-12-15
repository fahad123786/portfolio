import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Animation from "./Components/Animation";
import Education from "./Components/Education";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <div className="bg-black"> 
    <Home/>
    <Animation/>
    <Education/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
