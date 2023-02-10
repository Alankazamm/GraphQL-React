import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Router, Routes, } from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

import './style/style.css';
import App from './components/App';
import SongList from './components/SongList';

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
        <HashRouter >
        <Routes>
          <Route path="/" element={<SongList />}>
            <Route path="/" element={<SongList />} />
          </Route>
        </Routes>

    </HashRouter>
      


      
    </ApolloProvider>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<Root />)
