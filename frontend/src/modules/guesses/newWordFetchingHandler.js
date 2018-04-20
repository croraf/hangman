
import {GAME_STATE_INITIALIZING} from './guessesUtil';

const newWordFetchingHandler = (state, action) => {

    return Object.assign({}, state, {
        gameState: GAME_STATE_INITIALIZING,
        missedGuesses: [],
        lettersRowText: []
    });

};

export default newWordFetchingHandler;
