import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { Provider as ReduxProvider } from 'react-redux';
import { Route } from 'react-router-dom';

import configureStore, { appHistory } from './core/create-store';
import Dashboard from './components/dashboard';

const appStore = configureStore({});

console.log(appStore, 'Appstore')

const Comp = () => (
    <div>
        <Dashboard />
        Component
    </div>
)

const Root = () => (
    <ReduxProvider store={appStore}>
        <ConnectedRouter history={appHistory}>
            <Route path="/" component={Comp} />
        </ConnectedRouter>
    </ReduxProvider>
);

export default hot(module)(Root);
