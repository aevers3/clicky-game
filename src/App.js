import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Game from './components/Game';
import Footer from './components/Footer';
import images from './images';



class App extends React.Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    lastGuessed: 'reset'
  }

  // ==========================
  // Shuffle function goes here 
  // ==========================

  

  // Runs each time a correct tile is clicked - adds to game score.
  incrementScore = () => {
    this.setState({ score: this.state.score + 1 })
  };

  handleCorrect = () => {
    this.setState({ lastGuessed: 'correct' })
  };

  handleIncorrect = () => {
    this.setState({ lastGuessed: 'incorrect' })
  }

  handleClick = props => {
    console.log(props.isClicked)
    // If the image has not been clicked, update the state to clicked. Otherwise, game over.
    if (!props.isClicked) {
      this.handleCorrect();
      this.incrementScore();
      this.setState((state) => {
        let chosen = state.images.filter(image => image.id === props.id);
        // Extract filtered object from returned array
        chosen = chosen[0];
        console.log('chosen', chosen);
        chosen.isClicked = true;
        return chosen;
      });
    } else {
      this.handleIncorrect();
      // If the game score beats topScore, update topScore
      if (this.state.score > this.state.topScore) {
        this.setState({ topScore: this.state.score })
      }

      // Reset all images to a state of {isClicked: false} for next game.
      this.setState((state) => {
        console.log('reset state', state.images)
        const reset = state.images.map(image => image.isClicked = false);
        return reset;
      })

      // Reset game score to zero.
      this.setState({ score: 0 });
    }
  }

  render() {
    return (
      <>
        <Navbar
          incrementScore={this.incrementScore}
          score={this.state.score}
          topScore={this.state.topScore}
          lastGuessed={this.state.lastGuessed} />
        <Banner />
        <Game
          handleClick={this.handleClick}
          images={this.state.images}
          incrementScore={this.incrementScore}
          score={this.state.score}
          topScore={this.state.topScore} />
        <Footer />
      </>
    );
  }
}

export default App;
