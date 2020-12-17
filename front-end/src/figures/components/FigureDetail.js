import React, { Component } from 'react';
import EditModal from './EditModal'
import { Header, List } from 'semantic-ui-react';
import { editFigure } from '../api'

class FigureDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            figureToEdit: {
                ...this.props.figureDetails,
                doHave: Boolean
            },
            showEditModal: false
        }
    }

    openAndEdit = (figureFromTheList) => {
        this.setState({
            showEditModal: true,
            figureToEdit: {
                id: figureFromTheList.id,
                name: figureFromTheList.name,
                year: figureFromTheList.year,
                toyLine: figureFromTheList.toyLine,
                doHave: figureFromTheList.doHave
            },
        });
    };

    handleEditChange = (e) => {
        this.setState({
            figureToEdit: {
                ...this.state.figureToEdit,
                [e.currentTarget.name]: e.currentTarget.value,
            },
        });
    };

    closeAndEdit = async (e) => {
        e.preventDefault();
        try {
            editFigure(this.state.figureToEdit)
            this.setState({
                showEditModal: false,
            });
        } catch (err) {
            console.log(err);
        }
    };


    render() {
        return (
            <>
                <Header>{this.props.figureDetails.name}</Header>
                <List>
                    <List.Item>Year : {this.props.figureDetails.year}</List.Item>
                    <List.Item>Toy Line : {this.props.figureDetails.toyLine}</List.Item>
                    <List.Item>In Collection : {(this.props.figureDetails.doHave) ? 'True' : 'False'}</List.Item>
                    <List.Item><button onClick={() => this.openAndEdit(this.state.figureToEdit)}>Edit Figure</button></List.Item>

                </List>
                <EditModal handleEditChange={this.handleEditChange}
                    open={this.state.showEditModal}
                    figureToEdit={this.state.figureToEdit}
                    closeAndEdit={this.closeAndEdit} />
            </>
        )
    }
}
export default FigureDetail;