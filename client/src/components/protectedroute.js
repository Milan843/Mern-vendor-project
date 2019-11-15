import React from 'react';
import Cookie from 'js-cookie';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    console.log(rest)
    return (
      <Route
        {...rest}
        render={props => {
            console.log(props)
          if (Cookie.get("token") !== "null") {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };
  
  export default ProtectedRoute;
