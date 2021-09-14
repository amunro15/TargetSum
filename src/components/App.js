import React from 'react';
import Game from './Game';

class App extends React.Component {
  render() {
    return <Game initialSeconds={10} randomNumberCount={6} />;
  }
}

export default App;
