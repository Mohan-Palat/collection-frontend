import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import Figure from './Figure'
import CreateForm from './CreateForm'
import { getAllFigures, deleteFigureByID, createFigure } from '../api'

class FigureList extends Component {
    constructor(props) {
        super(props);
        console.log('figurelist props', this.props)

        this.state = {
                  figures: this.props.figures,
                  showDetails: this.props.showDetails,
                  showList: this.props.showList
        }
    }
    ////////////////////////////
    deleteFigure = (id) => {
        console.log("the figure id to delete: ", id)
        deleteFigureByID(id)
        .then((response) => {
            console.log(`the figure with ${id} has been deleted `)
            console.log('props in delete', this.props)
            // rerender UI list after delete without calling DB
            const newFigureList = this.props.figures.filter((figure)=> {
                return figure._id !== id; 
            })
            this.props.setFigures(newFigureList)
        })
        .catch((error) => {
            console.log('API error', error)
        })
    }
///////////////////////

    render() {
        if (this.state.showList){
            console.log('figure list props', this.props)
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
                            // componentState={()=>this.props.componentState()}
                            componentState={this.props.componentState}
                            deleteFigure={()=>this.deleteFigure(figure._id)}
                            // componentState={this.props.componentState}
                            />
                })
        }
        console.log('FIgureState.state', this.state)

            return (
                <>
                    <Table color='blue' key='blue' inverted padded>
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