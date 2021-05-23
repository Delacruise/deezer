import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import ArtistDetail from './pages/ArtistDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/ArtistDetail/:artistId">
            <ArtistDetail />
          </Route>
          <Route path="/Search/:artistName">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
