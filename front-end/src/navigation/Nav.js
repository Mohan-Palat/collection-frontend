import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  state = {}

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleItemClick = (e, { name}) => {
      this.setState({ activeItem: name })
      console.log('nav name', name)
      console.log('nav state', this.state)
      if (name==='newItem'){
          this.props.componentState({showCreate:true, showDetails:false, showList:false})
      } else {
        this.props.componentState({showCreate:false, showDetails:false, showList:true})
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
        //   componentState={()=>this.props.componentState({showCreate:false, showDetails:false, showList:true})}
        >
          My Collection
        </Menu.Item>

        <Menu.Item
          name='newItem'
          active={activeItem === 'newItem'}
        //   onClick={()=>this.props.componentState({showCreate:true, showDetails:false, showList:false})}
            onClick={this.handleItemClick}  
            // componentState={showCreate:true, showDetails:false, showList:false}
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