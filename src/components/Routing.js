import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import ArtistDetails from './ArtistDetails';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/artist/:artistId" component={ArtistDetails} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Routing;

