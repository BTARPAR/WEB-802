import { Component } from 'react'
import { connect } from 'react-redux'
import './Counter.css';

class CounterWithRedux extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      count: 0
    }
    this.decrement = this.decrement.bind(this)
    this.increment = this.increment.bind(this)
  }

  decrement() {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  increment() {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  render() {
    const { count } = this.props
    return (
      <div className={'m-3'}>
        <h2>Counter With Redux</h2>
        <div>
          <button onClick={ this.decrement } className={'btn btn-danger'}>-</button>
          <span className={'m-3'}>{ count }</span>
          <button onClick={ this.increment } className={'btn btn-primary'}>+</button>
        </div>
      </div>
    );
  }
}

//Add the mapStateToProps function:
function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(CounterWithRedux);
