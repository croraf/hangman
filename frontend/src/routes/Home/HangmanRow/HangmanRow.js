import React from 'react';
import { HangmanDrawing } from './HangmanDrawing/HangmanDrawing';
import { MissedGuesses } from './MissedGuesses/MissedGuesses';


class HangmanRow extends React.Component {
    render() {

        const {missedGuesses, countOfMissed} = this.props;

        return (
            <div style={{
                height: '80%',
                marginTop: '71px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <HangmanDrawing countOfMissed={countOfMissed} />
                <MissedGuesses missedGuesses={missedGuesses} />
            </div>
        );
    }
}

export {HangmanRow};
