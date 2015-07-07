import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>Hello {this.props.who}</div>
    )
  }
}

module.exports = Hello;
