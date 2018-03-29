
// const guessedText = [undefined, undefined, undefined, undefined, 'H', 'A', '', '', '', 'A', ''];
// const missedGuesses = ['B', 'D', 'E', 'Z', 'P', 'U', 'K', 'L', 'Q', 'W' /* */];



const GAME_STATE_OVER = 'GAME_STATE_OVER';
const GAME_STATE_ON = 'GAME_STATE_ON';
const GAME_STATE_INITIALIZING = 'GAME_STATE_INITIALIZING';



const fetchNewWordAndDispatchNewWordAction = () => dispatch  => {

    dispatch({type: 'newWordFetching'});

    return (
        
        fetch(
            'http://api.wordnik.com:80/v4/words.json/randomWords?' + 
            'hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&' +
            'minLength=5&maxLength=11&limit=1' + 
            '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        )
            .then(response => response.json())
            .then(randomWords => {
        
                dispatch({type: 'newWordReceived', newWord: randomWords[0].word.toUpperCase()});
                
            })
    );
};

const guessesReducer = (state = {textToGuess: [], guessedText: [], missedGuesses: [], gameState: GAME_STATE_INITIALIZING}, action) => {
    switch (action.type) {
        case 'newGuess':

            if (state.gameState !== GAME_STATE_ON || state.textToGuess.length === 0) {

                // in case game is over or not initialized ignore user guesses
                return state;
            }

            console.log('new guess:', action.guess);

            if (state.guessedText.includes(action.guess) || state.missedGuesses.includes(action.guess)) {
                
                console.log('ALREADY TRIED');
                return state;

            } else if (state.textToGuess.includes(action.guess)) {

                console.log('GUESS');

                const newGuessedText = [...state.guessedText];

                for (let i = 0; i < state.textToGuess.length; i++) {
                    if (state.textToGuess[i] === action.guess) {
                        newGuessedText[11 - state.textToGuess.length + i] = action.guess;
                    }
                }

                const gameState = newGuessedText.includes('') ? GAME_STATE_ON : GAME_STATE_OVER;

                return Object.assign({}, state, {guessedText: newGuessedText, gameState});

            } else {

                console.log('MISS');

                const gameState = state.missedGuesses.length === 10 ? GAME_STATE_OVER : GAME_STATE_ON;

                return Object.assign({}, state, {missedGuesses: [...state.missedGuesses, action.guess], gameState});
            
            }

        case 'newWordReceived':

            const textToGuess = action.newWord.split('');

            // Fill hidden text on screen with undefined and ''.
            // undefined is used for light-gray not needed boxes,
            // and '' for not guessable dark-gray boxes
            const guessedText = 
                Array(11-textToGuess.length).fill(undefined)
                    .concat(Array(textToGuess.length).fill(''));
                
            console.log('text to guess:', textToGuess);

            return Object.assign({}, state, {
                guessedText,
                textToGuess,
                missedGuesses: [],
                gameState: GAME_STATE_ON});

        case 'newWordFetching':
            return Object.assign({}, state, {gameState: GAME_STATE_INITIALIZING, missedGuesses: [], guessedText: []});

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

export { guessesReducer, fetchNewWordAndDispatchNewWordAction };
