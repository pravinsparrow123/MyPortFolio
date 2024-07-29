import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Route>
    </Router>
  );
}

export default App;