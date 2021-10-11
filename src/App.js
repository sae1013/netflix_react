import "./App.css";
import HomeScreen from "./page/HomeScreen";
import MovieScreen from "./page/MovieScreen";
import SearchScreen from "./page/SearchScreen";
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Nav></Nav>
            <HomeScreen />
          </Route>

          <Route path="/movie/:id" exact>
            <Nav></Nav>
            <MovieScreen />
          </Route>
          
          <Route path="/search" exact>
            <Nav></Nav>
            <SearchScreen/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
