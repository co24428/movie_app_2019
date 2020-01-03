import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoding: true
  };
  // 6초 뒤 바뀐다!
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoding:false})
    }, 6000)
  }


  render() {
    const {isLoding} = this.state;
    return <div>{isLoding ? "Loading": "We are ready"}

    </div>;
  }
}
export default App;
