import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const Users = ({match}) => {
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/foo/1`}>go to user 1</Link>
          </li>
          <li>
            <Link to={`${match.url}/foo/2`}>go to user 2</Link>
          </li>
          <li>
            <Link to={`${match.url}/3`}>go to user 3</Link>
          </li>
        </ul>
        <Route
          path={`${match.path}/:userId`}
          render={({match}) => (
            <div>
              <h3> {match.params.userId} </h3>
            </div>
          )}
        />
        <Route
          path={`${match.path}/foo/:userId`}
          render={({match}) => (
            <div>
              <h3> {match.params.userId} </h3>
            </div>
          )}
        />
      </div>
    );
  };

  export default Users;