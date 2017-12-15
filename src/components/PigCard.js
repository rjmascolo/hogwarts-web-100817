import React from 'react';
import PigDetail from './PigDetail';
import PigFace from './PigFace';

export default class PigCard extends React.Component {
  constructor() {
    super();

    this.state = {
      showDetail: false,
      hideMe: false
    };
  }

  convertName = () => {
    return this.props.thisPig.name
      .toLowerCase()
      .split(' ')
      .join('_');
  };

  showDetail = () => {
    this.setState(prevState => {
      return { showDetail: !prevState.showDetail };
    });
  };

  toggleCard = () => {
    this.setState(prevState => {
      return { hideMe: !prevState.hideMe };
    });
  };

  render() {
    const pigs = this.props.thisPig;
    const myState = this.state;
    const faceOrDetail =
      myState.showDetail === false ? (
        <PigFace
          pigs={pigs}
          showDetail={this.showDetail}
          convertName={this.convertName}
          toggleCard={this.toggleCard}
        />
      ) : (
        <PigDetail
          pigs={pigs}
          showDetail={this.showDetail}
          convertName={this.convertName}
          toggleCard={this.toggleCard}
        />
      );
    return (
      <div className="four wide column">
        {this.state.hideMe === false ? (
          faceOrDetail
        ) : (
          <button onClick={this.toggleCard}> ShowMe! </button>
        )}
      </div>
    );
  }
}
