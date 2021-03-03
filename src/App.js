import Header from './components/header/Header.jsx';
import User from './components/user-dashboard/User.jsx';
import UserList from './components/user-dashboard/UserList.jsx';
import LoginPage from './components/login/LoginPage';

import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';

export default function App() {
return (
<>
  <Router>
    <Header/>
      <Switch>
        <Route 
          path="/" 
          exact
          render={(routerProps) => <LoginPage {...routerProps} />} 
        />
          <Route 
            path="/user" 
            exact
            render={(routerProps) => <User {...routerProps} />} 
          />
        <Route 
          path="/users" 
          exact
          render={(routerProps) => <UserList {...routerProps} />} 
        />
      </Switch>
  </Router>
</>
)
}
