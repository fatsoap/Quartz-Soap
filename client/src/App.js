import React from 'react';
import './styles/App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import NotFound from './NotFound/Screen';
import IdeaBox from './IdeaBox/Screen';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/not" exact component={NotFound}/>
          <Switch>
            <Route path="/idea" exact={true}  component={IdeaBox} />
            <Route path="/idea/:tab"  component={IdeaBox} />
            <Redirect to="/idea/generate" />
          </Switch>
          <Redirect to="/idea/generate" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const NotFoundPage = () => {
  return(<div>not</div>)
}


export default App;
