import React from 'react';



import {HangmanRowContainer} from './HangmanRow/HangmanRowContainer';
import {LettersRowContainer} from './LettersRow/LettersRowContainer';
import {GameOverOverlayContainer} from './GameOverOverlay/GameOverOverlayContainer';

import squareImage from './square.png';


class Home extends React.Component {

    componentDidMount() {
        
        console.log('mounted');
        const body = document.getElementsByTagName('body')[0];

        fetch(
            'http://api.wordnik.com:80/v4/words.json/randomWords?' + 
            'hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&' +
            'minLength=5&maxLength=11&limit=1' + 
            '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        )
            .then(response => response.json())
            .then(randomWords => {

                this.props.newWordHandler(randomWords[0].word);
                body.addEventListener('keypress', this.props.newGuessHandler);
                
            });

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
