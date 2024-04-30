import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { HomePage } from "./components/pages/HomePage";
import { MyPage } from "./components/pages/Mypage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/mypage" component={MyPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
};

export default App;
