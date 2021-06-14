import { UserStorage } from "./data/userContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <UserStorage>
        <GlobalStyles />
        <Header />
        <Route path="/" exact>
          <Movies />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
      </UserStorage>
    </Router>
  );
}

export default App;
