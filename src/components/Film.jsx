import React from 'react';

class Film extends React.Component{
  render(){
    return(
        <div>
          <h4 className="film-title">{this.props.title}</h4>
          <h6 className="film_year">{this.props.year}</h6>
          <h5 className="film_director" onClick={() => this.props.searchDirector(this.props.director)}>{this.props.director}</h5>
          <img src={this.props.poster} alt="404: Poster Not Found" width="300px" className="poster-img"/>
        </div>
      )
  }
}

export default Film;