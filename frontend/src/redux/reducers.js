
const guessedText = [undefined, undefined, undefined, undefined, 'H', 'A', '', '', '', 'A', ''];
const missedGuesses = ['B', 'D', 'E', 'Z', 'P', 'U', 'K', 'L', 'Q', 'W' /* */];

const guessesReducer = (state = {textToGuess: [], guessedText, missedGuesses, isGameOver: false}, action) => {
    switch (action.type) {
        case 'newGuess':
            console.log('new guess:', action.guess);
            return state;
        case 'newWord':
            console.log('new word:', action.newWord);
            return Object.assign({}, state, {textToGuess: action.newWord.split('')});
        default:
            return state;
    }
};

/* const missedGuesses = (state = 'idle', action) => {

    switch (action.type) {
        case 'solvingStarted':
            return 'solving';
        case 'solvingStopped':
            return 'idle';
        default:
            return state;
    }
}; */

export { guessesReducer };
