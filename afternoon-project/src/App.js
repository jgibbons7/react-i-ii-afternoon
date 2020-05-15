import React, {Component} from 'react';
import './App.css';
import data from './data'
import CardInfo from './components/CardInfo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      cardArray: data,
      cardNum: 0
    }

    this.nextCard = this.nextCard.bind(this)
    this.prevCard = this.prevCard.bind(this)
  }
 
  nextCard(){
    this.setState({
      cardNum: this.state.cardNum += 1
    })
  }

  prevCard(){
    this.setState({
      cardNum: this.state.cardNum -= 1
    })
  }

  render() {
    const {id, firstName, lastName, country, employer, title, favoriteMovies} = this.state.cardArray[0]
    return (
      <div className="App">
        <div className='header'>
          <p className='pHome'>Home</p>
        </div>
        <div className='cardBox'>
          <CardInfo className='cardData' parentData={this.state.cardArray[this.state.cardNum]}/>
       
        </div>
        <div className='footer'>
          <button className='scrollButton'>{'< Previous'} </button>
          <div className='editButtonBox'>
            <button className='editButton'>Edit </button>
            <button className='editButton'>Delete </button>
            <button className='editButton'>New </button>
          </div>
          <button className='scrollButton'>{'Next >'} </button>
        </div>
      </div>
    );
  }
}

export default App;
