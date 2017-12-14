import React from 'react';

export default class PigCard extends React.Component {
  convertName = () => {
    return this.props.thisPig.name
      .toLowerCase()
      .split(' ')
      .join('_');
  };

  render() {
    const pigs = this.props.thisPig;
    return (
      <div>
        <h4>{pigs.name}</h4>
        <img
          src={require('../hog-imgs/' + this.convertName() + '.jpg')}
          alt="a sturdy pig"
        />
        <p>Specialty: {pigs.specialty}</p>
        <p>Highest Medal Achieved: {pigs['highest medal achieved']}</p>
        <p />
      </div>
    );
  }
}
