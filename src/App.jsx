import React from 'react';

import CVView from './CVView';

import 'bulma/css/bulma.css';
import './../styles/style.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <CVView />
      </div>
    );
  }
}

export default App;