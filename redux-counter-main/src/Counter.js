import { Component } from 'react'
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.decrement = this.decrement.bind(this)
    this.increment = this.increment.bind(this)
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state
    return (
      <div className={ 'm-3' }>
        <h2>Counter</h2>
        <div>
          <button onClick={ this.decrement } className={ 'btn btn-danger' }>-</button>
          <span className={ 'm-3' }>{ count }</span>
          <button onClick={ this.increment } className={ 'btn btn-primary' }>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
