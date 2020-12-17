import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import Figure from './Figure'

import { deleteFigureByID } from '../api'

class FigureList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            figures: this.props.figures,
            showDetails: this.props.showDetails,
            showList: this.props.showList
        }
    }

    deleteFigure = (id) => {
        deleteFigureByID(id)
            .then((response) => {
                // rerender UI list after delete without calling DB
                const newFigureList = this.props.figures.filter((figure) => {
                    return figure._id !== id;
                })
                this.props.setFigures(newFigureList)
            })
            .catch((error) => {
                console.log('API error', error)
            })
    }

    render() {
        if (this.state.showList) {
            let allFigures = "No Figures!"
            if (this.props.figures.length > 0) {
                allFigures = this.props.figures.map((figure, index) => {
                    return <Figure
                        image={figure.image}
                        name={figure.name}
                        year={figure.year}
                        toyLine={figure.toyLine}
                        doHave={figure.doHave}
                        id={figure._id}
                        key={index}
                        componentState={this.props.componentState}
                        deleteFigure={() => this.deleteFigure(figure._id)}
                    />
                })
            }

            return (
                <>
                    <Table color='blue' key='blue' inverted padded striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Image</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Year</Table.HeaderCell>
                                <Table.HeaderCell>Toy Line</Table.HeaderCell>
                                <Table.HeaderCell>In Collection?</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {allFigures}
                        </Table.Body>
                    </Table>
                </>

            );
        }
    }

}

export default FigureList;