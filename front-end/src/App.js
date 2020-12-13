import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Figures from './figures/components/FigureList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      figures: [],
    }
  }

  setFigures = (figures) => {
    this.setState({ figures: figures });
    console.log(this.state)
  }

  render() {
    return (
      <>
        {/* <Route path='/' component={Nav} />

        <Route path='/' exact render={() => <h2>Welcome to Blogy!</h2>} />

        <Route path='/about' component={About} />
        <Route path='/team' component={Team} /> */}

        <Route path='/figures' exact render={(props) => {
          return <Figures {...props}
                           figures={this.state.figures}
                           setFigures={this.setFigures} />
        }} />

      </>
    )
  }
}

export default App;