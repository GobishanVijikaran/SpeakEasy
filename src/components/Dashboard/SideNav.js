import React from 'react';
import { Avatar, Button, Box, grommet, Grommet, Nav, Sidebar } from 'grommet';

import {
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  StatusInfoSmall,
} from 'grommet-icons';


function SideNav() {
    const SidebarHeader = () => (
        <Avatar
          border={{ size: 'small', color: 'light-1' }}
          background="white"
          flex={false}
        >
          ER
        </Avatar>
      );
      
      const SidebarFooter = () => (
        <Nav gap="small">
          <Button icon={<Chat />} />
          <Button icon={<Help />} />
        </Nav>
      );
      
      const MainNavigation = () => (
        <Nav gap="small">
          <Button icon={<StatusInfoSmall />} href='/home'/>
          <Button icon={<Projects />} />
          <Button icon={<Clock />} href='/history'/>
          <Box pad="small" border={{ color: 'white', side: 'bottom' }} />
          <Box gap="small" pad={{ vertical: 'medium' }}>
            <Button icon={<Configure />} />
          </Box>
        </Nav>
      );
    return (
        <div>
            <Grommet theme={grommet} full>
                <Box direction="row" height={{ min: '100%' }}>
                <Sidebar style={{paddingTop: '60px'}}
                    background="brand"
                    header={<SidebarHeader />}
                    footer={<SidebarFooter />}
                >
                    <MainNavigation />
                </Sidebar>
                </Box>
            </Grommet>
        </div>
    )
}

export default SideNav