import React from 'react';

export default class PigFilter extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <h4>This is the filter</h4>
          <input
            onChange={this.props.filterGreasy}
            type="checkbox"
            value={this.props.isGreasy}
          />
          <select onChange={this.props.changeFilter}>
            <option value="name">By Name</option>
            <option value="weight">By Weight</option>
          </select>
        </form>
      </div>
    );
  }
}
