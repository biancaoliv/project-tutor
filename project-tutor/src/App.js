import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TutorialList from "./components/TutorialList";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <ul>
            <li>
              <Link to="/add">Add Tutorial</Link>
            </li>
          </ul>
        </Navbar>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/" element={<TutorialList />} />
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/tutorials/:id" element={<Tutorial />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
