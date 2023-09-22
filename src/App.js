import './App.css';
import Info from "./Info";
import About from "./About";
import SocialIcons from "./SocialIcons";

function App() {
  return (
    <div className="App">
        <div className={"card-container"}>
            <Info />
            <About />
            <SocialIcons />
        </div>

    </div>
  );
}

export default App;
