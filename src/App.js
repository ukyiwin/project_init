import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config'
import {Container ,Rail, Button, Header, Image, Menu, Ref, Segment, Sidebar } from 'semantic-ui-react'
import { DatePicker } from 'antd';
import TopMenu from './components/TopMenu'
import LeftMenu from './components/LeftMenu'
import './App.css';
// import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = { visible: true }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    const { route:{routes} } = this.props
    
    return (
      <div className="App">
        <TopMenu onClick={this.handleShowClick}/>
        <DatePicker />
        <LeftMenu />
        {/* <Segment>
          <Rail position='left'>
            <Segment>Left Rail Content</Segment>
          </Rail>

          <Rail position='right'>
            <Segment> Left Rail Content</Segment>
          </Rail>
         
        </Segment> */}
          

        {/* </LeftMenu> */}
            
        
        
        <Container text>
          {renderRoutes(routes)}
        </Container>
      </div>
    );
  }
}

export default App;
