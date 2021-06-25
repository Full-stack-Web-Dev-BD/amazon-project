import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
const AssetManager = React.lazy(() =>
  import(
    /* webpackChunkName: "viwes-blank-page" */ './ProductManager/ProductManager'
  )
);

const Setting = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './Setting/Setting')
);

// public route

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            {/* <ProtectedRoute
              path={`${match.url}/asset-manager`}
              component={AssetManager}
              roles={['Admin','Seller','Client']}
            /> */}
            <Route
              path={`${match.url}/product-manager`}
              render={(props) => <AssetManager {...props} />}
              exact
            />
            <Route
              path={`${match.url}/setting`}
              render={(props) => <Setting {...props} />}
              exact
            />
            {/* <Redirect to="/error" /> */}
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
