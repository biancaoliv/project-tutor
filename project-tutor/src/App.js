import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddTutorial from "./components/pages/AddTutorial";
import Tutorial from "./components/pages/Tutorial";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import TutorialList from "./components/pages/TutorialList";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<TutorialList />}/>
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/tutorials/:id" element={<Tutorial />}/>
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
