import React, { Component } from 'react';
import { Modal, Form, Button, Label, Header, List } from 'semantic-ui-react';

// const FigureDetail = ({ match }) => {
class FigureDetail extends Component {
    constructor(props) {
        super(props);
    }
    state = ({
        figure: this.props.figure,
        showDetails: true,
        showList: false

    })
    render() {
        // this.getState
        console.log('figureDetail props', this.props)
        return (
            <>
                <Header>{this.state.figure.name}</Header>
                <List>
                    <List.Item>Year: {this.state.figure.year}</List.Item>
                    <List.Item>Toy Line: {this.state.figure.toyLine}</List.Item>
                    <List.Item>In Collection?: {this.state.figure.doHave}</List.Item>
                </List>
            </>
        )
    }
}
export default FigureDetail;