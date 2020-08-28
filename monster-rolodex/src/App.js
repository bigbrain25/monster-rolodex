import React from 'react';
import { Search } from './components/search/search.component';
import { CardList }  from './components/card-list/card-list.component';


import './App.css';

class App extends React.Component {
    constructor() {
      super();

      this.state = {
        monsters: [],
        searchfield: ''
      };
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users}));
    }
    render(){
    return (
        <div className="App">
        <Search />        
         <CardList monsters = {this.state.monsters} />
        </div>
    );
  }
}

export default App;
