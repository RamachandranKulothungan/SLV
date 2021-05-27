import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import CreateSlots from './pages/AuthenticatedRoutes/CreateSlots'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
      <Switch>
        <Route path='/admin/slot/new' exact>
          <CreateSlots/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
