// Note: App component...!

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Navigation from './src/components/navigation/navigation';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </Fragment>
  );
};


export default App;