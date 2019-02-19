import React,{Component} from 'react';
//import './App.css';
import CardList from "./CardList";
import {robots} from "./robots"
import SearchBox from "./SearchBox"


class App extends Component{
  constructor(){
    super();
    this.state = {
      robots : robots,
      searchfield : ""
    }
  }

  componenentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
       .then(users=> this.setState({robots: users}))
     }

  onSearchChange = (event) =>{
   this.setState({searchfield : event.target.value});
  }

  render(){
    const filteredRobot = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
    })
    return (
      <div className= "tc">
     <h1>Robohash</h1>
     <SearchBox searchChange = {this.onSearchChange}/>
      <CardList robots = {filteredRobot}/>
        </div>
    );
  }
}
  


export default App;
