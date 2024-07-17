import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TutorialList from "./components/TutorialList";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Tutorial</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TutorialList />} />
          <Route path="/add" element={<AddTutorial />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
