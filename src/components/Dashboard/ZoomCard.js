import React from 'react';

import { Zoom , Video} from 'grommet-icons';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Chart,
  Grid,
  Grommet,
  Text,
  Button
} from 'grommet';

function ZoomCard() {
    const theme = {
        themeMode: 'dark',
        global: {
          font: {
            family: `-apple-system,
                 BlinkMacSystemFont, 
                 "Segoe UI"`,
          },
        },
        card: {
          container: {
            background: '#FFFFFF12',
            elevation: 'none',
          },
          footer: {
            pad: { horizontal: 'medium', vertical: 'medium' },
            background: '#FFFFFF06',
          },
        },
      };
      
      const gradient = [
        { value: 28, color: 'status-ok' },
        { value: 50, color: 'status-warning' },
        { value: 80, color: 'status-critical' },
      ];
      
      const data = [
        {
          icon: <Video size="large" />,
          title: 'Ben Jones',
          subTitle: 'Mississauga, Ontario',
          message: 'Interests: Reading, Sports',
          type: 'bar',
        },
        {
          icon: <Video size="large" />,
          title: 'Raj Kumar',
          subTitle: 'Chicago, Illinois',
          message: 'Interests: Tennis, Hiking, Checkers',
          type: 'line',
        }
      ];
      
      const ChartPreview = ({ type }) => (
        <Box>
          <Chart
            type={type}
            id={type}
            dash={type === 'line'}
            round
            thickness="xsmall"
            bounds={[
              [0, 6],
              [0, 100],
            ]}
            values={[
              { value: [6, 100], label: 'one hundred' },
              { value: [5, 70], label: 'seventy' },
              { value: [4, 40], label: 'sixty' },
              { value: [3, 80], label: 'eighty' },
              { value: [2, 25], label: 'forty' },
              { value: [1, 50], label: 'thirty' },
              { value: [0, 25], label: 'sixty' },
            ]}
            aria-label="chart card"
            color={gradient}
            size={{ height: 'xsmall' }}
          />
        </Box>
      );
      
      const Identifier = ({ children, title, subTitle, size, ...rest }) => (
        <Box gap="small" align="center" direction="row" pad="small" {...rest}>
          {children}
          <Box>
            <Text size={size} weight="bold">
              {title}
            </Text>
            <Text size={size}>{subTitle}</Text>
          </Box>
        </Box>
      );

    return (
        <div>
            <Grommet theme={theme} full>
                <Box pad="large" background="" height="100%">
                <Grid gap="medium" columns={{ count: 'fit', size: 'large' }}>
                    {data.map(value => (
                    <Card
                        key={value.title}
                        onClick={() => {
                        
                        alert('Card was Clicked!');
                        }}
                    >
                        <CardBody pad="small">
                        <Identifier
                            title={value.title}
                            subTitle={value.subTitle}
                            size="medium"
                        >
                            {value.icon}
                        </Identifier>
                        <br></br><br></br>
                        <ChartPreview type={value.type} />
                        <br></br>
                        <Box align="start" pad="medium">
                          <Button label="Join Call" href="#" />
                        </Box>
                        </CardBody>
                        <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
                        <Text size="medium">{value.message}</Text>
                        </CardFooter>
                    </Card>
                    ))}
                </Grid>
                </Box>
            </Grommet>
        </div>
    )
}

export default ZoomCard