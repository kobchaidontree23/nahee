import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter you name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}
class Football extends React.Component {
  shoot = (a,b) => {
    alert(b.type+ a);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }
  render() {
    return (
      <button
        onClick={(v) => this.shoot(" Goal",v)}
      >Take the shot!</button>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyForm/>
    <Football/>
  </React.StrictMode>,
  document.getElementById('root')
);



