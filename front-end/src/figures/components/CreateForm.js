import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateForm extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            year: '',
            toyLine: '',
            doHave: false,
            imageId: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
        // console.log('handleChange updated state', this.state)

    }

    render() {
        return (
            <Segment>
                <h4>Create Figure</h4>
                {/* <Form onSubmit={(e) => this.props.addSong(e, this.state)}> */}
                <Form onSubmit={(e) => {
                    console.log('form state', this.state)
                    console.log('form props', this.props)
                        this.props.addFigure(e, this.state);
                        this.setState({ name: '', 
                                        year: '',
                                        toyLine: '',
                                        doHave:false,
                                        imageId:''
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
                    <Form.Input type='text' name='doHave' value={this.state.doHave} onChange={this.handleChange} />
                    <Label>Upload Image Placeholder:</Label>
                    <Form.Input type='text' name='imageId' value={this.state.imageId} onChange={this.handleChange} />
                   
                   
                    {/* <Label>Album:</Label>
                    <Form.Input type='text' name='album' value={this.state.album} onChange={this.handleChange} /> */}
                    <Button type='Submit'>Create Figure</Button>
                </Form>
            </Segment>
        )
    }
}

export default CreateForm;
