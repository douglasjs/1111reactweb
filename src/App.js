import React from 'react';
import CustomerWeb from './components/customerweb/customerweb';
import ManagerWeb from './components/managerweb/managerweb';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact={true} path="/:cid" component={CustomerWeb} />
                  <Route path="/web/managerweb/:cid" component={ManagerWeb} />
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
