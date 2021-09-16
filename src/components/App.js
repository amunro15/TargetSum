import React from 'react';
import Game from './Game';

class App extends React.Component {
  // New key reinstantiates a component
  state = {
    gameId: 0,
  };

  // Unmount previous Game with key 0, and remount Game with key 1
  resetGame = () => {
    this.setState(prevState => {
      return {gameId: prevState.gameId + 1};
    });
  };

  // Make game harder when player wins by controlling the props (randomNumberCount and seconds)
  // Keep track of user's score
  render() {
    return (
      <Game
        initialSeconds={10}
        key={this.state.gameId}
        onPlayAgain={this.resetGame}
        randomNumberCount={6}
      />
    );
  }
}

export default App;
