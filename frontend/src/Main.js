import React from 'react';

import { Route } from 'react-router-dom';
import { Home } from './routes/Home/Home';

import { withTheme } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

class Main extends React.Component {

    componentDidMount() {
        
        console.log('mounted');
        const body = document.getElementsByTagName('body')[0];

        body.addEventListener('keypress', (event) => {
            console.log(event.key);
        });
    }


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
                    backgroundColor: '#225',
                    border: '2px solid white',
                    display: 'flex'
                }}>
                {/* <Route exact path="/" component={Home} /> */}
                <Home />
            </Paper>
        );
    }
}

export default withTheme()(Main);
