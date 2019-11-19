import React from 'react';
import CustomerWeb from './components/customerweb/customerweb';
import ManagerWeb from './components/managerweb/managerweb';
import ManagerLogin from './components/managerweb/managerlogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';



function App() {

  return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact path="/:cid" component={CustomerWeb} />
                  <Route exact path="/web/managerweb/" component={ManagerLogin} />
                  <Route exact path="/web/managerweb/:cid" component={ManagerWeb} />
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
