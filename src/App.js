import React, {useState} from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar"; 
import Chat from "./Chat";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>Gary is a knob</h1>
              </Route>
            </Switch>
          </div>
          </>
        )}
      </Router>    
    </div>
  );
}

export default App;
