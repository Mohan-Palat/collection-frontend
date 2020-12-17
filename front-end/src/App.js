import React, { Component } from 'react';
import FigureContainer from './figures/components/FigureContainer';
import Nav from './navigation/Nav'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      figures: [],
      showDetails: Boolean,
      showCreate: Boolean,
      showList: Boolean,
      figureDetails: {}
    }
  }
  getComponentState = (newState) => {
    console.log('PROPS:', newState)
    this.setState({
      showDetails: newState.showDetails,
      showCreate: newState.showCreate,
      showList: newState.showList,
      figureDetails: newState.figure
    })
  }

  setFigures = (figures) => {
    this.setState({ figures: figures });
  }

  render() {
    return (
      <>
        <Nav componentState={this.getComponentState} />
        <FigureContainer
          figures={this.state.figures}
          setFigures={this.setFigures}
          showDetails={typeof this.state.showDetails === 'function' ? false : this.state.showDetails}
          showCreate={typeof this.state.showCreate === 'function' ? false : this.state.showCreate}
          showList={typeof this.state.showList === 'function' ? true : this.state.showList}
          componentState={this.getComponentState}
          figureDetails={this.state.figureDetails}
        />
      </>
    )
  }
}

export default App;