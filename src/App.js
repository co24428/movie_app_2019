import React from 'react';
import axios from "axios";

class App extends React.Component{
  state = {
    isLoding: true,
    movies: []
  };
  
  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    // this.setState({movies:movies}) // 아래의 movies와 동일한 코드...
    this.setState({movies, isLoding:false})
  }

  componentDidMount(){
    this.getMovies();
  }


  render() {
    const {isLoding} = this.state;
    return <div>{isLoding ? "Loading...": "We are ready"}

    </div>;
  }
}
export default App;
