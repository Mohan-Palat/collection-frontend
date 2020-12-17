import React from 'react';
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

const EditModal = (props) => {

    return (
        <Modal open={props.open}>
            <Header>Edit Figure</Header>
            <Modal.Content>
                <Form onSubmit={props.closeAndEdit}>
                    <Label>Name:</Label>
                    <Form.Input
                        type="text"
                        name="name"
                        value={props.figureToEdit.name}
                        onChange={props.handleEditChange}
                    />
                    <Label>Year:</Label>
                    <Form.Input
                        type="text"
                        name="year"
                        value={props.figureToEdit.year}
                        onChange={props.handleEditChange}
                    />
                    <Label>Toy Line:</Label>
                    <Form.Input
                        type="text"
                        name="toyLine"
                        value={props.figureToEdit.toyLine}
                        onChange={props.handleEditChange}
                    />
                    <Modal.Actions>
                        <Button color="green" type="submit">
                            Edit Figure
                        </Button>
                    </Modal.Actions>
                </Form>
            </Modal.Content>
        </Modal>
    );
};

export default EditModal;