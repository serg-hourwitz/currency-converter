import "./App.css";
import Title from "./components/Title/Title";
import Header from "./components/Header/Header";
import Converter from "./components/Converter/Converter";

const App = () => {
  return (
    <div className="App">
      <Title />
      <div className="App-wrapper">
        <Header />
        <Converter />
      </div>
    </div>
  );
};

export default App;
