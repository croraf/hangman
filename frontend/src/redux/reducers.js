

const guessesReducer = (state = {guessedText: [1, 2, 'X', 4, 'A', '', '', 'Z'], missedGuesses: ['B', 'C', 'D', 'E', 'F']}, action) => {
    switch (action.type) {
        case 'newGuess':
            return state;
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
