import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import Figure from './Figure'
import CreateForm from './CreateForm'
import { getAllFigures, deleteFigureByID, createFigure } from '../api'

class Figures extends Component {
    // constructor(props){
    //     super(props);
    
    //     this.state = {
    //       figures: [],
    //     //   songToEdit: {
    //     //     title: '',
    //     //     artist: '',
    //     //     album: '',
    //     //     id: ''
    //     //   },
    //     //   showEditModal: false
    //     }
    //   }
    componentDidMount() {
        getAllFigures()
            .then((response) => {
                console.log('allFigures', response)
                this.props.setFigures(response.data.figures)
            })
            .catch((error) => {
                console.log('api error: ', error)
            })
    }
    addFigure = async (e, figure) => {
        e.preventDefault();
        console.log('props figure', this.props);
        console.log('figure', figure);
        createFigure(figure)
        .then((response) => {
            console.log('response', response)
            this.setState({
                figures: [...this.props.figures, response.config.data],
              });
              console.log('updated state', this.state)
        })
        .catch((error) => {
            console.log('api error: ', error)
        })

      };
    render() {
        let allFigures = <h4>No Figures!</h4>
        
        if (this.props.figures.length > 0) {

        //    allFigures = this.props.figures.map((figure, index) => {
        //     return <Figure name={figure.name} 
        //     year={figure.year} 
        //     // content={figure.content}
        //     id={figure._id}
        //     // deleteFigure={this.deleteFigure} 
        //     key={index} />
        // })
        allFigures = this.props.figures.map((figure, index) => {
            return <Figure 
            imageId={figure.imageId}
            name={figure.name} 
            year={figure.year} 
            toyLine={figure.toyLine} 
            doHave={figure.doHave}
            // content={figure.content}
            id={figure._id}
            // deleteFigure={this.deleteFigure} 
            key={index} />
        })
        }

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
                            {/* <Table.HeaderCell>Year</Table.HeaderCell>
                            <Table.HeaderCell>Year</Table.HeaderCell> */}
                            {/* <Table.HeaderCell>Protein</Table.HeaderCell> */}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {allFigures}
                    </Table.Body>
                </Table>
                <CreateForm addFigure={this.addFigure}/>
            </>
            // <>
            //     <h3>All Figures</h3>
            //     {allFigures}
            // </>
        );
    }
    //make an api call to delete and article
    // deleteArticle = (id) => {
    //     console.log("the article id to delete: ", id)
    //     deleteArticleByID(id)
    //     .then((response) => {
    //         console.log(`the article with ${id} has been deleted `)
    //         // rerender UI list after delete without calling DB
    //         const newArticlesList = this.props.articles.filter((article)=> {
    //             return article._id !== id; 
    //         })
    //         this.props.setArticles(newArticlesList)
    //     })
    //     .catch((error) => {
    //         console.log('API error', error)
    //     })
    // }
}

export default Figures;