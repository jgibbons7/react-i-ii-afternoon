import React, {Component} from 'react'
// import data from './data'

class CardInfo extends Component {
  constructor(){
    super()

    this.state = {

    }

  }

  render(){
    return <div>
      <p className='cardData'>{this.props.parentData.name.first} {this.props.parentData.name.last}</p>
      <h3 className='cardData'>From: {this.props.parentData.city}, {this.props.parentData.country}</h3>
      <h3 className='cardData'>Job Title: {this.props.parentData.title}</h3>
      <h3 className='cardData'>Employer: {this.props.parentData.employer}</h3>
      <h3 className='cardData'></h3>
      <h3 className='cardData'>Favorite Movies:</h3>
      <li className='cardData'>{this.props.parentData.favoriteMovies[0]}</li>
      <li className='cardData'>{this.props.parentData.favoriteMovies[1]}</li>
      <li className='cardData'>{this.props.parentData.favoriteMovies[2]}</li>
    </div>
}
}

export default CardInfo