import {connect} from 'react-redux';

import {HangmanRow} from './HangmanRow';

const mapStateToProps = (state) => {

    return ({
        missedGuesses: state.guesses.missedGuesses,
        countOfMissed: state.guesses.missedGuesses.length
    });

};



const HangmanRowContainer = connect(mapStateToProps, undefined)(HangmanRow);

export {HangmanRowContainer};
