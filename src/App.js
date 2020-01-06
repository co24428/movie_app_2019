import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoding: true,
    movies: []
  };
  
  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log(movies)
    // this.setState({movies:movies}) // 아래의 movies와 동일한 코드...
    this.setState({movies, isLoding:false})
  }

  componentDidMount(){
    this.getMovies();
  }


  render() {
    const {isLoding, movies} = this.state; console.log(movies)
    return (
      <section className="container">
        {isLoding ? (<div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        ) : (
          <div className="movies">
            { movies.map(movie => (
              <Movie
                key={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
