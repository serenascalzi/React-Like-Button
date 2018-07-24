import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    num: 0,
    val: 'likes'
  }

  incrementLikes = () => {
    if (this.state.num === 0) {
      return this.setState({
        num: this.state.num + 1,
        val: 'like'
      })
    } else {
      return this.setState({
        num: this.state.num + 1,
        val: 'likes'
      })
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.incrementLikes}>{this.state.num} {this.state.val}</button>
      </div>
    )
  }
}

export default App