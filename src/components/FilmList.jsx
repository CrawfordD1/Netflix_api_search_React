import React from 'react';
import Film from './Film.jsx'

class FilmList extends React.Component{
  render(){

    if(this.props.films.errorcode){
      return (
          <Film title= {this.props.films.errorcode} year={this.props.films.message}/>
        )
    }

    let filmNodes = this.props.films.map((film) => {
      return (
          <Film director={film.director} searchDirector={this.props.directorSearch} poster={film.poster} title= {film.show_title} year={film.release_year} key={film.show_id}/>
        )
    });

    return(
        <div className="film-list">
          {filmNodes}
        </div>
      )
  }
}

export default FilmList;