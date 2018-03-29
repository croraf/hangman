import React from 'react';



import {HangmanRowContainer} from './HangmanRow/HangmanRowContainer';
import {LettersRowContainer} from './LettersRow/LettersRowContainer';
import {GameOverOverlayContainer} from './GameOverOverlay/GameOverOverlayContainer';

import squareImage from './square.png';


class Home extends React.Component {

    componentDidMount() {
        
        console.log('Home component mounted');
        const body = document.getElementsByTagName('body')[0];
        body.addEventListener('keypress', this.props.newGuessHandler);

        this.props.fetchNewWordAndDispatchNewWordAction();

    }
    
    render() {
        
        return (
            <div style={{
                position: 'relative',
                width: '1620px',
                height: '980px',
                boxShadow: '2px 3px 95px rgba(0, 0, 0, 0.26)',
                borderRadius: '10px',
                backgroundColor: '#f5f5f5',
                backgroundImage: `url(${squareImage})`,
                backgroundPosition: 'bottom right',
                backgroundRepeat: 'no-repeat',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>

                <GameOverOverlayContainer />

                <HangmanRowContainer />

                <LettersRowContainer />
                
            </div>
        );
    }
}

export { Home };
