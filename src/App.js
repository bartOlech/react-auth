import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login/Login';

class App extends Component{
  state = {
    isLoggedIn: true
  }
  render() {
    return (
      <div>
        <Router>
          {this.state.isLoggedIn ? (
            <div>
              <Route exact path='/' component={Login}></Route>
            </div>
          ) : null}
        </Router>
      </div>
    )
  }
}

export default App;
