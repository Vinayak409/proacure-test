import logo from "./logo.svg";
import "./App.css";

// components
import LeftPanel from "./components/LeftPanel";
import SearchBarItems from "./components/SearchBarItems";
import Form from './components/Form';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
        <LeftPanel />
        <Routes>
          <Route path="/" element={<SearchBarItems />}/>
          <Route path="/newitem" element={<Form />}/>
        </Routes>
      <div >
        
      </div>
    </BrowserRouter>
  );
}

export default App;
