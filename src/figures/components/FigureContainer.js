import React, { Component } from 'react';
import CreateForm from './CreateForm'
import { getAllFigures, createFigure } from '../api'
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
            figureToEdit: {
                name: '',
                year: '',
                toyLine: '',
                id: ''
            },
        }
    }
    componentDidMount() {
        this.getFigureList()
    }

    getFigureList = () => {
        getAllFigures()
            .then((response) => {
                this.props.setFigures(response.data.figures)
            })
            .catch((error) => {
                console.log('api error: ', error)
            })
    }

    addFigure = async (e, figure) => {
        e.preventDefault();
        createFigure(figure)
            .then((response) => {
                this.setState({
                    figures: [...this.props.figures, response.config.data],
                    showList: true,
                    showCreate: false
                });
            })
            .catch((error) => {
                console.log('api error: ', error)
            })
    };

    render() {

        if (this.props.showDetails) {
            return (
                <FigureDetail figureDetails={this.props.figureDetails} />
            )
        } else if (this.props.showCreate) {
            return (
                <>
                    <CreateForm addFigure={this.addFigure} />
                </>
            );
        } else {
            return (
                <>
                    <FigureList figures={this.props.figures}
                        showList={this.props.showList}
                        showDetails={this.props.showDetails}
                        componentState={this.props.componentState}
                        setFigures={this.setFigures}
                    />
                </>
            );
        }
    }
}

export default FigureContainer;