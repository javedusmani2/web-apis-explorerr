import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApiDetailsPage from './pages/ApiDetailsPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider/:providerName" element={<ApiDetailsPage />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider/:provider/api/:apiName" element={<ApiDetailsPage />} />
      </Routes> */}
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/provider/:providerName" component={ApiDetailsPage} />
      </Switch> */}
    </Router>
  );
};

export default App;
