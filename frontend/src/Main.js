import React from 'react';

import { Route } from 'react-router-dom';
import { HomeContainer } from './routes/Home/HomeContainer';

import { withTheme } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

class Main extends React.Component {


    render() {

        return (
            <Paper elevation={4} 
                style={{
                    position: 'absolute',
                    bottom: '0%',
                    top: '0%',
                    left: '0%',
                    right: '0%',
                    minWidth: '1620px',
                    minHeight: '980px',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    backgroundColor: '#373d5c',
                    display: 'flex'
                }}>
                {/* <Route exact path="/" component={Home} /> */}
                <HomeContainer />
            </Paper>
        );
    }
}

export default withTheme()(Main);
