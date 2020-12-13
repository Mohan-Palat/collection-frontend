import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class Figure extends Component {
    render() {
        // return (
        //     <div className='figure'>
        //         <h4>{this.props.name}</h4>
        //         <sub>{this.props.year}</sub>
        //         {/* <p>
        //             {this.props.content}
        //         </p>
        //         <a href="#" onClick={this.deleteArticle}>delete</a> */}
        //         <br />-----------
        //     </div>
        // );
        return (
            <>
            <Table.Row>
                <Table.Cell>{this.props.imageId}</Table.Cell>
                <Table.Cell>{this.props.name}</Table.Cell>
                <Table.Cell>{this.props.year}</Table.Cell>
                <Table.Cell>{this.props.toyLine}</Table.Cell>
                <Table.Cell>{this.props.doHave}</Table.Cell>
            </Table.Row>
            </>
        )
    }
    // deleteArticle = (e) => {
    //     e.preventDefault();
    //     this.props.deleteArticle(this.props.id)
    // }
}

export default Figure;