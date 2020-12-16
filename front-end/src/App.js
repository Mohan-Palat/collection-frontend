import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FigureList from './figures/components/FigureList';
import FigureDetail from './figures/components/FigureDetail'
import FigureContainer from './figures/components/FigureContainer';
import Nav from './navigation/Nav'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      figures: [],
      showDetails: Boolean,
      showCreate: Boolean,
      showList: Boolean
    }
  }
  getComponentState = (props) => {
    console.log('PROPS:', props)
    this.setState({
        showDetails: props.showDetails,
        showCreate: props.showCreate,
        showList: props.showList
    })
    // useForceUpdate()
    // console.log('APP getComponentState', this.state)
}
  setFigures = (figures) => {
    this.setState({ figures: figures });
    console.log('setFigures state',this.state)
  }

  render() {
    console.log('app.js props', this.props)
    console.log('app.js state', this.state)
    console.log('typeof', typeof this.state.showCreate)
    return (
      <>
        <Nav componentState={this.getComponentState}/>
        {/* <Route path='/figures' exact render={(props) => { */}
          {/* return <FigureContainer {...props} */}
          <FigureContainer 
                           figures={this.state.figures}
                           setFigures={this.setFigures} 
                           showDetails={typeof this.state.showDetails === 'function' ? false : this.state.showDetails}
                           showCreate={typeof this.state.showCreate === 'function' ? false : this.state.showCreate }
                           showList={typeof this.state.showList === 'function' ? true : this.state.showList }
                           componentState={this.getComponentState}
                           />

        {/* }} /> */}

      </>
    )
  }
}

export default App;