import React from 'react';

class Circle extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      increasing: this.props.rating < nextProps.rating,
      decreasing: this.props.rating > nextProps.rating
    });
  }

  render() {
    const { color } = this.props;
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
