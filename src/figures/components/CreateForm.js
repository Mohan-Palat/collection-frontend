import React, { Component } from 'react';
import { Radio, Form, Button, Label, Segment, Message } from 'semantic-ui-react';


class CreateForm extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            year: '',
            toyLine: '',
            doHave: false,
            image: null
        }
    }
    handleChange = (e) => {
        this.setState((e.currentTarget.name === 'image') ? { [e.currentTarget.name]: e.currentTarget.files[0] } : { [e.currentTarget.name]: e.currentTarget.value })
    }

    render() {
        return (
            <Segment>
                <h4>Create Figure</h4>
                {/* <Form onSubmit={(e) => this.props.addSong(e, this.state)}> */}
                <Form inverted enctype="multipart/form-data" onSubmit={(e) => {
                    console.log('form state', this.state)
                    console.log('form props', this.props)
                    this.props.addFigure(e, this.state);
                    this.setState({
                        name: '',
                        year: '',
                        toyLine: '',
                        doHave: false,
                        image: null
                    });
                    console.log('updated state', this.state)
                }}
                >

                    <Label>Name:</Label>
                    <Form.Input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                    <Label>Year:</Label>
                    <Form.Input type='text' name='year' value={this.state.year} onChange={this.handleChange} />
                    <Label>Toy Line:</Label>
                    <Form.Input type='text' name='toyLine' value={this.state.toyLine} onChange={this.handleChange} />
                    <Label>In Collection:</Label>
                    <Form.Radio toggle type='radio' name='doHave' value={this.state.doHave} onChange={this.handleChange} />
                    <Label>Upload Image:</Label>
                    <Form.Input type='file' name='image' id='image' onChange={this.handleChange} />
                    <Button type='Submit'>Create Figure</Button>
                </Form>
            </Segment>
        )
    }
}

export default CreateForm;
