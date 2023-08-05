import React from 'react';

class Shieft extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'black',
      style: {
        height: '10vh',
        width: '10vh',
        border: '1px solid black',
        backgroundzColor: 'black',
      },
    };
  }

  change() {
    const newColor = this.state.color === 'black' ? ' ' : 'black';
    this.setState({
      color: newColor,
      style: {
        ...this.state.style,
        backgroundColor: newColor,
      },
    });
  }

  render() {
    return (
      <div>
        <div style={this.state.style}></div>
        <button onClick={() => this.change()}>shift color</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Shieft />
    </div>
  );
}

export default App;