import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Modal from "react-modal";
import Home from './components/Home';
import SurveyList from './components/SurveyList';


Modal.setAppElement('#root');
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/surveys" element={ <SurveyList />} />
      </Routes>
    </Router>
  );
}

export default App;
