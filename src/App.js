import React from 'react';
import CustomerWeb from './components/customerweb/customerweb';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Redux 
import {bindActionCreators} from 'redux';
import {connect, Provider} from 'react-redux';

//redux store
import store from './components/redux/store';

//redux action
import * as searchAction from './components/redux/action';

import withManagerWeb from './components/managerweb/withManagerweb';
import ManagerMain from './components/managerweb/managerMain';
import ManagerGeneralSetting from './components/managerweb/managerGeneralSetting';
import ManagerTemplate1 from './components/managerweb/managerTemplate1/managerTemplate1';
import ManagerTemplate2 from './components/managerweb/managerTemplate2';
import ManagerTemplate3 from './components/managerweb/managerTemplate3';
import ManagerTemplate4 from './components/managerweb/managerTemplate4';
import ManagerLogin from './components/managerweb/managerLogin';


import './App.css';

//redux State
const mapStateToProps = (state) => {
    return {
      ...state
    }
  }

//redux Dispatch
const mapDispatchToProps = (dispatch) => {
    return{
          ...bindActionCreators(searchAction,dispatch)
    }
}

const WithManagerMain = connect(mapStateToProps, mapDispatchToProps)(withManagerWeb(ManagerMain));
const WithGerneralSetting = withManagerWeb(connect(mapStateToProps, mapDispatchToProps)(ManagerGeneralSetting));
const WithManagerTemplate1 = withManagerWeb(connect(mapStateToProps, mapDispatchToProps)(ManagerTemplate1));
const WithManagerTemplate2 = withManagerWeb(connect(mapStateToProps, mapDispatchToProps)(ManagerTemplate2));
const WithManagerTemplate3 = withManagerWeb(connect(mapStateToProps, mapDispatchToProps)(ManagerTemplate3));
const WithManagerTemplate4 = withManagerWeb(connect(mapStateToProps, mapDispatchToProps)(ManagerTemplate4));


function App() {
  
  return (
      <div className="App">
         
         <Provider store={store}>
            <BrowserRouter>
              <Switch>
              <Route exact path="/:cid" component={CustomerWeb} />
                  <Route exact path="/managerweb/" component={ManagerLogin} />
                  <Route exact path="/managerweb/:cid/" component={WithManagerMain} />
                  <Route exact path="/managerweb/:cid/setting" component={WithGerneralSetting} />
                  <Route exact path="/managerweb/:cid/template1" component={WithManagerTemplate1} />
                  <Route exact path="/managerweb/:cid/template2" component={WithManagerTemplate2} />
                  <Route exact path="/managerweb/:cid/template3" component={WithManagerTemplate3} />
                  <Route exact path="/managerweb/:cid/template4" component={WithManagerTemplate4} />
              </Switch>
             </BrowserRouter>
        </Provider>

      </div>
  );
}

export default App;
