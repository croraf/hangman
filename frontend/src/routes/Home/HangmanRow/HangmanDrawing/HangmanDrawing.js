import React from 'react';

import hangmanDrawing from './flowResizedAndTransparent.png';
import barDrawing from './bar.png';

class HangmanDrawing extends React.Component {
    render() {

        const {countOfMissed} = this.props;


        const j = Math.floor(countOfMissed / 6) + 1;
        const i = countOfMissed % 6 + 1;

        console.log('part of "hangman flow" image taken (i, j):', i, j);

        return (
            <div 
                style={{
                    position: 'relative', width: '50%', /* display: 'flex', */ justifyContent: 'center', alignItems: 'center'
                }}
            >
                
                {/* <img width='40%' height='8%' src={barDrawing} style={{
                    position: 'absolute',
                    top: '10%',
                    left: '14.5%'
                }}/> */}

                <div style={{
                    width: '302.5px',
                    height: '500px',
                    backgroundImage: `url(${hangmanDrawing}), url(${barDrawing})`,
                    backgroundPosition: `${i*(100)}% ${j*100}%, 175% 0%`,
                    backgroundRepeat: 'repeat, no-repeat'
                }}/>
            </div>
        );
    }
}

export {HangmanDrawing};
