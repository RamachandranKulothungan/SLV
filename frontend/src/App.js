import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import CheckBookings from "./pages/AuthenticatedRoutes/CheckBookings";
import CreateSlots from "./pages/AuthenticatedRoutes/CreateSlots";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/book-slot" exact>
            <Booking />
          </Route>
        </Switch>
        <Switch>
          <Route path="/admin/slots/new" exact>
            <CreateSlots />
          </Route>
        </Switch>
        <Switch>
          <Route path="/admin/slots" exact>
            <CheckBookings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
