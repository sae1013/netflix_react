import "./App.css";
import HomeScreen from "./page/HomeScreen";
import MovieScreen from "./page/MovieScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>

          <Route path='/movie/:id' exact>
            <MovieScreen/>
          </Route>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
