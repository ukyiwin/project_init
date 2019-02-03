// import React, { Component } from 'react'
// import {Sticky,Rail, Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
// export default class SidebarExampleSidebar extends Component {
//     state = {}

//     handleContextRef = contextRef => this.setState({ contextRef })
//     render() {
//         const { contextRef } = this.state
//       return (
        
//         <Sidebar.Pushable as={Segment} >
//         {/* <Sticky context={contextRef}> */}
        
//         <Rail position='left'>
        
//         <Sidebar
//             style={{paddingTop:200}}
//             ref={this.handleContextRef}
//             as={Menu}
//             animation='overlay'
//             icon='labeled'
//             inverted
//             onHide={this.props.handleSidebarHide}
//             vertical
//             visible={this.props.visible}
//             width='thin'>
//             <Sticky context={contextRef}>
//                 <Menu.Item as='a' context={contextRef}>
//                     <Icon name='home' />
//                 Home
//                 </Menu.Item>
//                 <Menu.Item as='a'>
//                     <Icon name='gamepad' />
//                 Games
//                 </Menu.Item>
//                 <Menu.Item as='a'>
//                     <Icon name='camera' />
//                 Channels
//                 </Menu.Item>
            
//                 </Sticky>
//           </Sidebar>
//           </Rail>
//           {/* </Sticky> */}
        
//                 <Sidebar.Pusher >
//                   {this.props.children}
//                 </Sidebar.Pusher >
//                 </Sidebar.Pushable>
//       )
//     }
// }
// import React, { Component } from 'react'
// import { Dropdown,Sidebar,Segment, Icon, Input, Menu } from 'semantic-ui-react'
// import './index.css'
// export default class MySidebar extends Component {
//     state = {}

//     handleItemClick = (e, { name }) => this.setState({ activeItem: name })


//     componentDidMount() {}

//     render() {
//         const { activeItem } = this.state

//         return(
//             <Sidebar.Pushable  as={Segment}>
//                 <div className='full height'>
//                     <div className='toc'>
//                         <Menu className='vertical left fixed'>
//                             <Menu.Item>
//                                 Home
//                                 <Icon name='dashboard' />
//                                 <Menu.Menu>
//                                     <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
//                                         Search
//                                     </Menu.Item>
//                                     <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
//                                         Add
//                                     </Menu.Item>
//                                     <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
//                                         Remove
//                                     </Menu.Item>
//                                 </Menu.Menu>
//                             </Menu.Item>
//                             <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
//                                 <Icon name='grid layout' />
//                                 Browse
//                             </Menu.Item>
//                             <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
//                                 Messages
//                             </Menu.Item>

//                             <Dropdown item text='More'>
//                                 <Dropdown.Menu>
//                                     <Dropdown.Item icon='edit' text='Edit Profile' />
//                                     <Dropdown.Item icon='globe' text='Choose Language' />
//                                     <Dropdown.Item icon='settings' text='Account Settings' />
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                         </Menu>
//                     </div>
//                     <div className='article'>
//                         <div>{this.props.children}</div>
//                     </div>
//                 </div>
//             </Sidebar.Pushable>
//         )
//     }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
// import Header from '../Header/Header';
import './index.css';

class SubMenu extends Component {
  render() {
    let subMenu = this.props.submenu;

    if (subMenu !== null) {
      return (
        <div>
          {subMenu.map(submenu => {
            return (
              <div key={submenu.name} className="sub-menu">
                <Link to={submenu.name}>
                  <Icon name="plus" size="small"/>
                  <span>{submenu.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'dashboard'
    };
  }

  render() {
    const menus = [
      {
        name: 'dashboard',
        icon: 'inbox',
      },
      {
        name: 'form',
        icon: 'checkmark box',
        submenus: [
          { name: 'input' },
          { name: 'range-picker' }
        ]
      },
      {
        name: 'dropdown',
        icon: 'sitemap',
      },
      {
        name: 'calendar',
        icon: 'calendar check',
      },
      {
        name: 'layout',
        icon: 'grid layout',
      },
      {
        name: 'chart',
        icon: 'bar chart',
      }
    ];

    return (
      <div>
        {/* <Header menu={this.state.activeMenu} /> */}
        <div className="left-menus">
          {menus.map(item => {
            if (item.submenus) {
              return (
                <div key={item.name}
                  className={this.state.activeMenu === item.name ? 'menu active' : 'menu' }
                  onClick={() => this.setState({ activeMenu: item.name })}>
                    <Icon name={item.icon} size="large"/>
                    <span>{item.name}</span>
                    <Icon name={this.state.activeMenu === item.name ? "angle up" : "angle down" }/>
                  <div className="">
                    <div className={ 'sub-menu-container ' +
                        (this.state.activeMenu === item.name ? 'active' : '') } >
                      <SubMenu submenu={item.submenus} menu={item} />
                    </div>
                  </div>
                </div>
              )
            } else {
              return (
                <Link to={item.name} name={item.name} key={item.name}
                  className={this.state.activeMenu === item.name ? 'menu active' : 'menu' }
                  onClick={() => this.setState({ activeMenu: item.name })}
                  >
                  <Icon name={item.icon} size="large"/>
                  <span>{item.name}</span>
                </Link>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

export default LeftMenu;
