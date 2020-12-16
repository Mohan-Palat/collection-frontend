import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import Figure from './Figure'
import CreateForm from './CreateForm'
import { getAllFigures, deleteFigureByID, createFigure } from '../api'
import FigureDetail from './FigureDetail';
import FigureList from './FigureList'

class FigureContainer extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            figure: {},
            showDetails: this.props.showDetails,
            showCreate: this.props.showCreate,
            showList: this.props.showList,
            figureDetail: this.props.figureDetail
        }
        console.log('Container state:',this.state)
        console.log('Container props:',this.props)
    }
    componentDidMount() {
        getAllFigures()
            .then((response) => {
                console.log('allFigures', response)
                this.props.setFigures(response.data.figures)
            })
            .catch((error) => {
                console.log('api error: ', error)
            })
            console.log('componentDidMount', this.props)
    }

    addFigure = async (e, figure) => {
        e.preventDefault();
        console.log('props figure', this.props);
        console.log('figure', figure);
        createFigure(figure)
            .then((response) => {
                console.log('response', response)
                this.setState({
                    figures: [...this.props.figures, response.config.data],
                    showList: true,
                    showCreate: false
                });
                console.log('updated state', this.state)
            })
            .catch((error) => {
                console.log('api error: ', error)
            })
    };



    render() {
        console.log('FigureContainer PROPS', this.props)
        console.log('FigureContainer STATE', this.state)

        if (this.props.showDetails) {
            this.setState({figureDetail: this.props.figureDetail})
            return (
                <FigureDetail 
                // figure={this.state.figure}
                figureDetail={this.state.figureDetail}
                // componentState={this.props.getComponentState}
                />

            )
        } else if (this.props.showCreate) {
            return (
                <>
                    <CreateForm addFigure={this.addFigure} />
                </>
            );
        } else {
            console.log('Right before FigureList', this.state)
            return (
                <>
                    <FigureList figures={this.props.figures}
                                showList={this.props.showList}
                                showDetails={this.props.showDetails}
                                // componentState={()=>this.props.componentState(this.state)} 
                                componentState={this.props.componentState}
                                setFigures={this.setFigures} />
                </>
            );
        }
    }
}

export default FigureContainer;