import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Layout from './hoc/Layout/Layout';
import StudyHallHome from './containers/studyHallHome/home';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';
import CreateHall from './containers/CreateHall/create';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
           <Toolbar />
         <Switch>
            <Route path="/" exact component={StudyHallHome}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/create" component={CreateHall}/>
         </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
