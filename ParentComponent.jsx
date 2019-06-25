import React from 'react';
import ReactDOM from 'react-dom';

const diffentlocation = document.getElementById('different-location');

class DifferentLocation extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return ReactDOM.createPortal(
      this.props.children,
      diffentlocation,
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.</p>
        <p>
          Example of React Portal(When you some Component to mount on different location)
        </p>
        <DifferentLocation>
          <Child />
        </DifferentLocation>
      </div>
    );
  }
}
export default Parent;

function Child() {
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}
