import React from 'react';
import './styles/App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import SideBar from './sideBar/SideBar';
import IdeaBox from './IdeaBox/Screen';

function App() {
  return (
    <div className="container">
      <SideBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={NotFoundPage}/>
          <Switch>
            <Route path="/idea/:tab"  component={IdeaBox} />
            <Redirect to="/" />
          </Switch>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const NotFoundPage = () => {
  return(<div>not</div>)
}


export default App;
