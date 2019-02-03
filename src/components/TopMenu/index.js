import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Dropdown } from 'semantic-ui-react';

import { StyledMenu,StyledLogo,StyledHeader } from './styled'
import logo from '../../assets/img/logo.png'
class TopMenu extends Component {

    render() {

        let iconStyle = {
            margin: '0 10px 0 0'
        };

        return (
            <StyledMenu borderless fixed="true">
                <Menu.Menu postion="left" className="menu-logo">
                    <Menu.Item>
                        <StyledLogo size='mini' src={logo} /> 
                    </Menu.Item>
                    <StyledHeader header>Hello</StyledHeader>
                    {/* <Menu.Item>
                        <Link to="/">Dashboard</Link>
                        <Link to="pageone">Dashboard</Link>
                    </Menu.Item> */}
                    <Menu.Item onClick={this.props.onClick}>
                        <Icon name='sidebar' onClick={this.props.onClick} />
                    </Menu.Item>
                </Menu.Menu>


                <Menu.Menu position="right">
                    {/* <Menu.Item>
                        <TopSearch />
                    </Menu.Item>
                    <Menu.Item name="notification" onClick={this.handleItemClick}>
                        <Notification icon="alarm outline" numOfNew={3} />
                    </Menu.Item>
                    <Menu.Item name="message" onClick={this.handleItemClick}>
                        <Icon name="comments outline" size="large" style={iconStyle} />
                    </Menu.Item>
                    <Menu.Item name="setting" onClick={this.handleItemClick}>
                        <MyMenu />
                    </Menu.Item> */}
                </Menu.Menu>
      
            
            </StyledMenu>
        )
    }
}

export default TopMenu
