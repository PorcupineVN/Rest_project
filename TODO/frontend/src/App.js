import React from 'react';
import UserList from './components/User.js';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'Users': [

            ]
        }
    }
    render () {
        return (
            <div>
                <UserList Users={this.state.Users} />
            </div>
        )
    }
}
export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/