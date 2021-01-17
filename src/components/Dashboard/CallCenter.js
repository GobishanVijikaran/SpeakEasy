import React from 'react'; 
import { Box, Grid } from 'grommet';
import SignUpForm from '../Home/SignUpForm'; 
import SideNav from '../Dashboard/SideNav'; 
import Main from './Main'; 

function CallCenter() {
    return (
    <div>
        <Grid
            fill
            areas={[
                { name: 'nav', start: [0, 0], end: [0, 0] },
                { name: 'main', start: [1, 0], end: [1, 0] },
            ]}
            columns={['small', 'flex']}
            rows={['flex']}
            gap="small"
            >
            <Box gridArea="nav" background="brand">
                <SideNav />
            </Box>
            <Box gridArea="main" background="">
                <Main />
            </Box>
        </Grid>
    </div>
    )
}

export default CallCenter
