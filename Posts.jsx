import React from 'react';

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state={isLoading:true,data:null}
  }
  
  componentDidMount() {
    console.log("componentDIdmOUNT CALLED")
    fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then(jsonResponse =>this.setState({data:jsonResponse,isLoading:false}))
  
  }
      componentDidUpdate(prevProps, prevState, snapshot)
      {
          throw new Error('I crashed');
        console.log("componentDIdUODATE CALLED")
      }
      componentWillUnmount() {
          console.log("Removing the data")
      }
      
      render() {
        return(
          <div>
          {this.state.data!=null && this.state.isLoading===false ? 
          <ul>
              {this.state.data.map((item,index)=><li key={index}>{item.title}</li>)} 

            </ul>
            :<div style={{fontWeight:'bold',fontSize:'35px',textAlign:'center'}}>Loading.....</div>} 
          </div>
        )  
      }
}

export default Posts;
