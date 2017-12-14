import React from 'react';

export default class PigCard extends React.Component {
  convertName = () => {
    return this.props.thisPig.name
      .toLowerCase()
      .split(' ')
      .join('_');
  };

  render() {
    console.log(this.props.thisPig.name);
    const url = '../hog-imgs/cherub.jpg';
    const pigs = this.props.thisPig;
    return (
      <div>
        <h4>{pigs.name}</h4>
        <img src={require('../hog-imgs/' + this.convertName() + '.jpg')} />
        <p>Specialty: {pigs.specialty}</p>
        <p>Highest Medal Achieved: {pigs['highest medal achieved']}</p>
        <p />
      </div>
    );
  }
}
