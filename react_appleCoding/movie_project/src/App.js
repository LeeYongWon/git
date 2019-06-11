import React, { Component } from 'react';
import './App.css';
import {data} from './data';
import MovieList from './moive-list/movie-list';
import Header from './header/header';


class App extends Component {
  state = {
    headerMessage: '영화 소개 프로젝트',
    movieData:data,
  };

  render() {
    return (
      <div className="App">
        <Header headerMessage={this.state.headerMessage} />
        <MovieList movieData={this.state.movieData}/>
        <div>Main content</div>
      </div>
    );
  }
}
// 

export default App;













// class App extends Component{
  //   state={
  //     count:0
  //   };
  //     countUp(){
  //       this.setState({
  //         count: this.state.count +1
  //       });
  //     }

  //     countDown(){
  //       this.setState({
  //         count: this.state.count -1
  //       });
  //     }

  //     render(){
  //       return (
  //         <div className="App">
  //           <PropsTestClass count={this.state.count}/>
  //           <div>
  //             <span>{this.state.count}</span>
  //           </div>
  //             <button onClick={this.countUp.bind(this)}>Count Up</button>
  //             <button onClick={this.countDown.bind(this)}>Count Down</button>
  //         </div>
  //       )
  //     }
  // }

  // class PropsTestClass extends Component{
  //   render(){
  //     return (
  //       <div>
  //         <div>
  //           <span>Hello I am testClass</span>
  //         </div>
  //         <div>받은 Prop의 데이터는 {this.props.count} 입니다.</div>
  //       </div>
  //     )
  //   }
  // }