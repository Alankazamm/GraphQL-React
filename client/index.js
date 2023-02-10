import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

import './style/style.css';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  link: httpLink,
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path='/' component={SongList} />
     
          <Route exact path='/songs/new' component={SongCreate}></Route>
          <Route exact path='/songs/:id' component={SongDetails} />
    
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
