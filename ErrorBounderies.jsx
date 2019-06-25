import React from 'react';

class ErrorBounderies extends React.Component {
  constructor(props){
    super(props);
    this.state={hasError:false}
  }
  componentDidCatch(error,info)
    {
        this.setState({hasError:true});
    }
     
      render() {
        return(
          <div>
              {this.state.hasError===true ? <div>Something Went Wrong</div>: this.props.children}
          </div>
        )  
      }
}

export default ErrorBounderies;
