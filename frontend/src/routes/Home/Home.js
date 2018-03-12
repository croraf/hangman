import React from 'react';



import {HangmanRowContainer} from './HangmanRow/HangmanRowContainer';
import {LettersRowContainer} from './LettersRow/LettersRowContainer';

class Home extends React.Component {
    
    render() {
        
        return (
            <div style={{
                width: '1350px',
                height: '750px',
                margin: 'auto',
                boxShadow: '2px 3px 95px rgba(0, 0, 0, 0.26)',
                borderRadius: '10px',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>

                <HangmanRowContainer />

                <LettersRowContainer />
                
            </div>
        );
    }
}

export { Home };
