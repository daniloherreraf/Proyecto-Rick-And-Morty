import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import { Home, LandingPage, Form, Detail } from "./views";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/create" component={Form} />
    </div>
  );
}

export default App;
