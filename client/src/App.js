import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import DashboardForm from "./components/Dashboard";

import Project from "./components/Project";
import AllProjects from "./components/AllProjects";


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <StoreProvider>*/}
          <Nav />
          {<Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/Dashboard" component={DashboardForm} />
            <Route exact path="/MyProject" component={Project} />
            {/* <Route exact path="/Success" component={Success} /> */}

            <div>
              <h2 className="title">Projects</h2>
              <Route exact path="/AllProjects" component={AllProjects} />
            </div>
          </Switch>}
          {/* </StoreProvider> */}
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
