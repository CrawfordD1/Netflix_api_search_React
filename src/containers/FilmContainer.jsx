import React from 'react';
import FilmList from '../components/FilmList.jsx';

class FilmContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      films:[],
      actor: ""
    }
  }

  search(name, baseUrl){
    // const url = ("https://netflixroulette.net/api/api.php?actor=" + name);
    const url = baseUrl + name;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', () => {
      if(request.status === 200 || request.status === 404||request.status === 400){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({
          films: data
        });
      }
    });
    request.send();
  }


  handleChange(event){
    var str = event.target.value;
    // var encodedStr = str.replace(/./gm, function(s) {
    //     return "&#" + s.charCodeAt(0) + ";";
    // });
    this.setState({
      actor: str
    })
  }

  actorSearch(name) {
    this.search(name, "https://netflixroulette.net/api/api.php?actor=")
  }

  directorSearch(name) {
    this.search(name, "https://netflixroulette.net/api/api.php?director=")
  }


  render(){
    return(
        <div className="film-container">
        <img src="https://netflixroulette.net/img/logo.png" alt="Logo not found"/>
        <input name='actor' onChange={this.handleChange.bind(this)} ></input>
          <button onClick={() => {this.actorSearch(this.state.actor)}}>Search Actor</button>
          <FilmList films={this.state.films} directorSearch={this.directorSearch.bind(this)}/>
        </div>
      )
  }
}

export default FilmContainer;