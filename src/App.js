import React from 'react';
import axios from "axios";
import Movie from "./Movie";

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
      <section class="container">
        {isLoding ? <div class="loader">
          <span class="loader__text">Loading...</span>
        </div>
        : movies.map(movie => {
          console.log(movie);
          console.log(movie.title);
          return (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
            />
          );
        })}
      </section>
    );
  }
}
export default App;
