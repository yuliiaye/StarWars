import React from 'react';
import axios from 'axios';

const API = 'https://swapi.dev/api/planets/';
const IMG = 'https://starwars-visualguide.com/assets/img/planets/'
let imgurl

export default class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet : {},
      planetID : 1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {  
    this.setState(state => ({planetID : state.planetID + 1}));    
    this.fetchInfo(this.state.planetID);

  }

  fetchInfo(id) {    
    axios.get(API + id)    
    .then(res => {      
      console.log('Fetch result:', res);      
      this.setState({planet : res.data})
    })
    imgurl = IMG + this.state.planetID
  }

  componentDidMount() {
    this.fetchInfo(this.state.planetID);
    this.setState(state => ({planetID : state.planetID + 1}));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Next</button>
        <img src={imgurl + '.jpg'}
             alt="a planet"></img>
        <ul>        
          <li key={Math.random()}>Name:  {this.state.planet.name}</li>
          <li key={Math.random()}>Diameter: {this.state.planet.diameter}</li>
          <li key={Math.random()}>Terrain: {this.state.planet.terrain}</li>
        </ul>
      </div>

    )
  }
}