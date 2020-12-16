import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing>
        <Menu.Item
          name='myCollection'
          active={activeItem === 'myCollection'}
          onClick={this.handleItemClick}
          componentState={()=>this.props.componentState({showCreate:false, showDetails:false, showList:true})}
        >
          My Collection
        </Menu.Item>

        <Menu.Item
          name='newItem'
          active={activeItem === 'newItem'}
          onClick={()=>this.props.componentState({showCreate:true, showDetails:false, showList:false})}
          componentState={()=>this.props.componentState({showCreate:true, showDetails:false, showList:false})}
        >
          Add New Item
        </Menu.Item>

        {/* <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item> */}
      </Menu>
    )
  }
}

export default Nav;