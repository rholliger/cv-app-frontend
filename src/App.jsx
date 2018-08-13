import React from 'react';

import AppRouter from './AppRouter';

import 'bulma/css/bulma.css';
import './../styles/style.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;