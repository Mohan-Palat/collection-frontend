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
            image: null/// changes this
        }
    }
    handleChange = (e) => {
        // this.setState({ [e.currentTarget.name]: e.currentTarget.value })
        console.log('e.currentTarget.name', e.currentTarget)
        // console.log('e.currentTarget.files[0]', e.currentTarget.files[0])
        this.setState((e.currentTarget.name === 'image') ? {[e.currentTarget.name]: e.currentTarget.files[0]} : {[e.currentTarget.name]: e.currentTarget.value })
        // console.log('handleChange updated state', this.state)
    }

    // addImage = (e) => {
    //     // filename
    //     console.log('filename ' + e.target.value);
        
    //     //file 
    //     console.log('file ' + e.target.files[0]);
        
    //     this.setState({image:e.target.files[0]});
    //     // if you are using axios then you can use below code
    //     //const formData = new FormData();
    //         // formData.append('file', event.target.files[0])
    //         // axios.put(
    //         //     'url',
    //         //     formData,
    //         //     { headers: { 'content-type': 'multipart/form-data' } }
    //         // ).then(data => {
    //         //     console.log('file uploaded')
    //         //     console.log(data)
    //         // }).catch(e => {
    //         //     console.log('error')
    //         //     console.log(e)
    //         // })
            
    //         // in express , node, backend code would be
    //         //import formidable from 'formidable'
    //         //(req, res) => {
    //         //  let form = new formidable.IncomingForm();
    //         //  form.parse(req, (err, fields, files) => {
    //             // you can get the file from files.file.path
    //         //  })
    //         // }
    //   }

    render() {
        return (
            <Segment>
                <h4>Create Figure</h4>
                {/* <Form onSubmit={(e) => this.props.addSong(e, this.state)}> */}
                <Form enctype="multipart/form-data" onSubmit={(e) => {
                    console.log('form state', this.state)
                    console.log('form props', this.props)
                        this.props.addFigure(e, this.state);
                        this.setState({ name: '', 
                                        year: '',
                                        toyLine: '',
                                        doHave:false,
                                        image:null
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
                    <Form.Input type='file' name='image' id='image' onChange={this.handleChange} />
                   
                   
                    {/* <Label>Album:</Label>
                    <Form.Input type='text' name='album' value={this.state.album} onChange={this.handleChange} /> */}
                    <Button type='Submit'>Create Figure</Button>
                </Form>
            </Segment>
        )
    }
}

export default CreateForm;
