import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
class Figure extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    state = {
        figureForDetails: {
            name: "",
            year: "",
            toyLine: ""
        },
    }

    handleClick = (e) => {
        this.setState({
            showDetails: true,
            showList: false,
            figureForDetails: { ...this.props },
        })
        this.changeState(this.state)
    }

    changeState = () => {
        this.props.componentState({ showList: false, showDetails: true, figure: { ...this.props } })
    }

    render() {

        return (
            <>
                <Table.Row>
                    <Table.Cell>{this.props.image}</Table.Cell>
                    <Table.Cell>{this.props.name}</Table.Cell>
                    <Table.Cell>{this.props.year}</Table.Cell>
                    <Table.Cell>{this.props.toyLine}</Table.Cell>
                    <Table.Cell>{(this.props.doHave) ? 'True' : 'False'}</Table.Cell>
                    <Table.Cell> <button onClick={this.handleClick}>Get Info</button></Table.Cell>
                    <Table.Cell><button onClick={this.props.deleteFigure}>Delete</button></Table.Cell>
                </Table.Row>
            </>
        )
    }
}

export default Figure;