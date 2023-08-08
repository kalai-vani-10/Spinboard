import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    resultMessage: "",
    enteredName: null,
    name: "circle",
  }

  handleClick = (event) => {
    const enteredName = parseInt(prompt('enter your Choice'));
    if ( enteredName >= 1 && enteredName <= 12) {
      this.setState({ enteredName: enteredName });
    }
  }

  startRotation = () => {
    this.setState({
      name: "circle start-rotate"
    });

    setTimeout(() => {
      this.setState({
        name: "circle start-rotate stop-rotate"
      });

        const winningNumber = Math.floor(Math.random() * 12) + 1;
        this.setState({winningNumber:winningNumber});
      
        const enteredName = this.state.enteredName;
        console.log(winningNumber);
        console.log(enteredName);
        if (winningNumber === enteredName) {
          this.setState({resultMessage:"You are the winner"});
        } else {
          this.setState({resultMessage:"Sorry"});
        }
    // Wait for 1 second before checking the result
    }, Math.floor(Math.random() * 10000 + 1));
  }

  render() {
    return (
    

      <div className="container">
             
        <h1>SpinGame</h1>
        <h2>Are You Ready to Play the Game</h2>

        <input type="button" value="Yes" onClick={this.handleClick} />

       
        <ul className={this.state.name}>
          <li><div className="text">1</div></li>
          <li><div className="text">2</div></li>
          <li><div className="text">3</div></li>
          <li><div className="text">4</div></li>
          <li><div className="text">5</div></li>
          <li><div className="text">6</div></li>
          <li><div className="text">7</div></li>
          <li><div className="text">8</div></li>
          <li><div className="text">9</div></li>
          <li><div className="text">10</div></li>
          <li><div className="text">11</div></li>
          <li><div className="text">12</div></li>
        </ul>
        <div className="spin-button" onClick={this.startRotation}>SPIN</div>
        <p>Your Choice is: {this.state.enteredName}</p>
        <p>Random Number is:{this.state.winningNumber}</p>
        <p>{this.state.resultMessage}</p>
 
       
      </div>
    );
  }
}

export default App;
