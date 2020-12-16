import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react'
import { Redirect, useHistory } from 'react-router-dom';
import { getAllFigures, deleteFigureByID, createFigure } from '../api'
import FigureDetail from './FigureDetail'
import { Container, Row, Col } from 'react-bootstrap'
import FigureList from './FigureList'

class Figure extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log('figure props', this.props)
    }
    state = {
        figureForDetails: {
            name: "",
            year: "",
            toyLine: ""
        },
        // showDetails: true,
        //             showList: false, 
        // showDetails: this.props.showDetails,
        // showList: this.props.showList,
        // componentState: this.props.componentState
    }

    // handleDeleteClick = (id) => {
    //     console.log('delete click props', id)
    //     deleteFigureByID(id)
    // }

    handleClick = (e) => {
       
    this.setState({ showDetails: true,
                    showList: false, 
                    figureForDetails: {...this.props},
                    // componentState: {()=>this.componentState(this.state)}
                })
                this.changeState(this.state)
                // this.props.componentState({showDetails:true, showList:false})
                
                // console.log('handleclick props',this.props)
                // console.log('handleclick state',this.state)            
            }
    changeState = () => {
        console.log('changeState', this.state)
        this.props.componentState({showList:false, showDetails:true, figure: {...this.props}})
    }
    
    
    

render() {

    if (this.state.showDetails=== true) {
        // this.props.componentState(this.props)
        console.log('details props',this.props)
        console.log('details state',this.state)
        return(
            <>
            Hello
            <FigureDetail figure={this.state.figureForDetails}
                            componentState={this.componentState}
                            // componentState={()=>this.props.componentState(this.state)} 
                            />
            </>
        )

    } else {
        console.log('props before table render', this.props)
        return (
            <>
            <Table.Row>
                <Table.Cell>{this.props.image}</Table.Cell>
                <Table.Cell>{this.props.name}</Table.Cell>
                <Table.Cell>{this.props.year}</Table.Cell>
                <Table.Cell>{this.props.toyLine}</Table.Cell>
                <Table.Cell>{this.props.doHave}</Table.Cell>
                <Table.Cell> <button onClick={this.handleClick}>Get Info</button></Table.Cell>
                {/* <Table.Cell> <button onClick={() => {this.setState({showList:false, showDetails:true}); this.props.componentState(this.state)}}>Get Info</button></Table.Cell> */}
                {/* <Table.Cell> <button onClick={() => this.props.openModal(this.props)}>Get Info</button></Table.Cell> */}
                {/* <Table.Cell> <button onClick={() => this.setState({ modalOpen: true, modFigure: this.props })}>Get Info</button></Table.Cell> */}
                <Table.Cell><button onClick={this.props.deleteFigure}>Delete</button></Table.Cell>
            </Table.Row>
            </>
        )
    }
    }
}

export default Figure;