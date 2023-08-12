import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import NavBar from "./components/NavBar";
import History from "./components/History";
import { useState } from "react";

// const HistoryContext = createContext()
const App = () => {

  const [historyProp, setHistoryProp] = useState([]);
  // console.log(historyProp);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Calculator historyProp={historyProp} setHistoryProp={setHistoryProp} />} />
          <Route path="/history" element={<History  historyProp={historyProp}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
