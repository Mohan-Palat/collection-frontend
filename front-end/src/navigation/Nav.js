import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
    state = { activeItem: 'myCollection' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if (name === 'newItem') {
            this.props.componentState({ showCreate: true, showDetails: false, showList: false })
        } else {
            this.props.componentState({ showCreate: false, showDetails: false, showList: true })
        }
    }

    render() {
        const { activeItem } = this.state
        return (
            <Menu pointing>
                <Menu.Item
                    name='myCollection'
                    active={activeItem === 'myCollection'}
                    onClick={this.handleItemClick}
                >
                    My Collection
                </Menu.Item>

                <Menu.Item
                    name='newItem'
                    active={activeItem === 'newItem'}
                    onClick={this.handleItemClick}
                >
                    Add New Item
                </Menu.Item>
            </Menu>
        )
    }
}

export default Nav;