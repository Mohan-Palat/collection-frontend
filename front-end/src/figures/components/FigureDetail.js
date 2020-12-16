import React, { Component } from 'react';
import { Modal, Form, Button, Label, Header, List } from 'semantic-ui-react';

// const FigureDetail = ({ match }) => {
class FigureDetail extends Component {
    constructor(props) {
        super(props);
        // this.props: props
    }
    state = ({
        figureDetail: this.props.figureDetail,
        showDetails: true,
        showList: false

    })
    render() {
        // this.getState
        console.log('figureDetail state', this.state)
        console.log('figureDetail props', this.props)
        // this.props.componentState(this.state)
        return (
            <>
                <Header>{this.props.figureDetail.name}</Header>
                <List>
                    <List.Item>Year: {this.props.figure.year}</List.Item>
                    <List.Item>Toy Line: {this.props.figure.toyLine}</List.Item>
                    <List.Item>In Collection?: {this.props.figure.doHave}</List.Item>
                </List>
            </>
        )
    }
}
export default FigureDetail;