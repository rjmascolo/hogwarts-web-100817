import React from 'react';
import PigCard from './PigCard';

export default class PigList extends React.Component {
  render() {
    const pigList = this.props.pigList.map(pig => <PigCard thisPig={pig} />);
    return (
      <div>
        <h4>Your Hogs</h4>
        {pigList}
      </div>
    );
  }
}
