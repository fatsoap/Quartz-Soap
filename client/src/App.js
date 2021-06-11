import React from 'react';
import './styles/App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={NotFoundPage}/>
          <Switch>
            <Route path="/ideaBox"  component={RestaurantPage} />
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
const RestaurantPage = () => {
  return(<div>RRR</div>)
}

export default App;
