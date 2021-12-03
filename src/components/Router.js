import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRouter = ({ refreshAuth, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        {isLoggedIn ?
          (
            <>
              <Route
                path="/"
                element={<Home userObj={userObj} />}
              />
              <Route
                path="/profile"
                element={<Profile userObj={userObj} refreshAuth={refreshAuth} />}
              />
            </>
          )
          :
          (
            <Route
              path="/"
              element={<Auth />}
            />
          )
        }
      </Routes>
    </Router>
  )
}

export default AppRouter;