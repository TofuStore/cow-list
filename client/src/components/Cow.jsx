import React from 'react';

class Cow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false
    }

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({
      showDescription: !this.state.showDescription
    })
  }

  render() {
    return (
      <>
        <div onClick={() => {this.props.setCow(this.props.cow.id)}}>{this.props.cow.name}</div>
      </>
    )
  }
}

export default Cow;