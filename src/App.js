import React from 'react';
import CustomerWeb from './components/customerweb/customerweb';
import withManagerWeb from './components/managerweb/withManagerweb';
import ManagerMain from './components/managerweb/managerMain';
import ManagerGeneralSetting from './components/managerweb/managerGeneralSetting';
import ManagerTemplate1 from './components/managerweb/managerTemplate1/managerTemplate1';
import ManagerTemplate2 from './components/managerweb/managerTemplate2';
import ManagerTemplate3 from './components/managerweb/managerTemplate3';
import ManagerTemplate4 from './components/managerweb/managerTemplate4';
import ManagerLogin from './components/managerweb/managerLogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

const WithManagerMain = withManagerWeb(ManagerMain);
const WithGerneralSetting = withManagerWeb(ManagerGeneralSetting);
const WithManagerTemplate1 = withManagerWeb(ManagerTemplate1);
const WithManagerTemplate2 = withManagerWeb(ManagerTemplate2);
const WithManagerTemplate3 = withManagerWeb(ManagerTemplate3);
const WithManagerTemplate4 = withManagerWeb(ManagerTemplate4);

function App() {

  return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact path="/:cid" component={CustomerWeb} />
                  <Route exact path="/web/managerweb/" component={ManagerLogin} />
                  <Route exact path="/web/managerweb/:cid/" component={WithManagerMain} />
                  <Route exact path="/web/managerweb/:cid/setting" component={WithGerneralSetting} />
                  <Route exact path="/web/managerweb/:cid/template1" component={WithManagerTemplate1} />
                  <Route exact path="/web/managerweb/:cid/template2" component={WithManagerTemplate2} />
                  <Route exact path="/web/managerweb/:cid/template3" component={WithManagerTemplate3} />
                  <Route exact path="/web/managerweb/:cid/template4" component={WithManagerTemplate4} />
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
