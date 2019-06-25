import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import InputComponent from './InputComponent';
import Parent from './ParentComponent';
import ErrorBounderies from './ErrorBounderies';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={toggle:false};
    this.handleOnClick=this.handleOnClick.bind(this);
  }
  handleOnClick () {
    this.setState((state,props)=>({toggle:!this.state.toggle}))
  }
  render(){
    return (
      <React.Fragment>
      <ErrorBounderies>
      <button onClick={this.handleOnClick}>Toogle Between Component</button>
       {this.state.toggle!=false ? <Posts/> :<Parent/>} 
        </ErrorBounderies>
        </React.Fragment>
    )
  }
}

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={count:0};
//     this.handleOnClick=this.handleOnClick.bind(this);
//   }
//   handleOnClick () {
//    this.setState({count:count+1});
//    this.setState({count1:count1+1})
//    this.setState({count:count+1});
//    this.setState({count:count+1});
//    this.setState({count:count+1});
//    this.setState({count:count+1});
//   }
//   handleindependent(){
//     ReactDOM.unstable_batchedUpdates(()=>{
//       this.setState({count:count+1});
  
//     })
    
//   }
//   render(){
//     return (
//       <div>
//       {this.state.count}
//       <button onClick={this.handleOnClick}>ClickMe</button>
//         </div>
//     )
//   }
// }













// function App() {
//   return (
//    <div>
//      Hello World
//      <App1 username="Steve"/>
//      </div>
//   );
// }

// function App1(props) {
//   return(
//     <p>Hello I am using React{props.username} </p>
//   )
// }







// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={count:0}
//     this.handleClick=this.handleClick.bind(this);
//     this.handleClickminus=this.handleClickminus.bind(this);
//   }

//   handleClick(value,event) {
//     console.log("We are inside  handleClick method")
    
//       this.setState({count:this.state.count+1});
//   }

//   handleClickminus() {
//     {
//       console.log("We are inside  handleClickminus method")
//       this.setState({count:this.state.count-1})

//     }

//   }

//   render() {
//     return(
//       <div>
//       <button onClick={this.handleClick}>+</button>
//       {this.state.count}
//       <button onClick={this.handleClickminus}>-</button>
//     <App1>
//     <div> I am tryoing to use basic class of React</div>
//       </App1>

//       </div>
//     )
//   }
// }

// class App1 extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render() {
//     return(
//       <div>
//       {this.props.children}
//       <p>Hey I am in Second Component {this.props.profile} {this.props.lastname}</p>
//       </div>
//     )
//   }
// }



export default App;
