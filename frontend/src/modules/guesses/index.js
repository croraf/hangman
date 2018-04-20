/**
 * The only module that manages all game actions and state. 
 * If the application gets bigger the file will be broken acording to application's domains.
 */

import newGuessActionHandler from './newGuessActionHandler';
import newWordReceivedHandler from './newWordReceivedHandler';
import newWordFetchingHandler from './newWordFetchingHandler';

import {GAME_STATE_INITIALIZING} from './guessesUtil';

const NEW_GUESS = 'newGuess';
const NEW_WORD_RECEIVED = 'newWordReceived';
const NEW_WORD_FETCHING = 'newWordFetching';

/**
 * Async action creator. Dispatch start of fetching for new word. Fetches, and on success dispatches start new game action.
 */
const fetchNewWordAndDispatchNewWordAction = () => dispatch  => {

    dispatch({type: NEW_WORD_FETCHING});

    return (
        
        fetch(
            'http://api.wordnik.com:80/v4/words.json/randomWords?' + 
            'hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&' +
            'minLength=5&maxLength=11&limit=1' + 
            '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        )
            .then(response => response.json())
            .then(randomWords => {
        
                dispatch({type: NEW_WORD_RECEIVED, newWord: randomWords[0].word.toUpperCase()});
                
            })
    );
};


// static examples
// const lettersRowText = [undefined, undefined, undefined, undefined, 'H', 'A', '', '', '', 'A', ''];
// const missedGuesses = ['B', 'D', 'E', 'Z', 'P', 'U', 'K', 'L', 'Q', 'W' /* */];

const guessesReducer = (state = {textToGuess: [], lettersRowText: [], missedGuesses: [], gameState: GAME_STATE_INITIALIZING}, action) => {
    switch (action.type) {
        case NEW_GUESS:
            return newGuessActionHandler(state, action);

        case NEW_WORD_RECEIVED:
            return newWordReceivedHandler(state, action);

        case NEW_WORD_FETCHING:
            return newWordFetchingHandler(state, action);

        default:
            return state;
    }
};

export { 
    guessesReducer,
    fetchNewWordAndDispatchNewWordAction,
    NEW_GUESS
};
