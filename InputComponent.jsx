import React from 'react';


class InputComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={error:null,value:''};
        this.handleOnChange=this.handleOnChange.bind(this);
    }
   
    handleOnChange(event) {
        console.log("Input Value  is",event.target.value);
        this.setState({value:event.target.value})
    }
   
    render() {
        return(
            <div>
                <input type="text" onChange={this.handleOnChange} value={this.state.value}/>
            </div>
        )
    }
}

export default InputComponent;













// const styles={
//     alignCenter:{
//     textAlign:'center'
//     },
//     topLevelMargin: {
//         marginTop:'30px'
//     }
// }
 // componentDidMount() {
    //     window.addEventListener("resize", function () {
    //         console.log("Adding On resize listener");
    //     });
    // }
     // componentWillUnmount() {
    //     console.log("compoent Will Unmount");
    // }