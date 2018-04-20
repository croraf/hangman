
import {formatLettersRowText, GAME_STATE_ON, GAME_STATE_OVER} from './guessesUtil';
import {playWinSound, playLoseSound} from '../audioUtil/winLoseSounds';


const letterGuessedHandler = (state, action) => {

    const newLettersRowText = [...state.lettersRowText];

    for (let i = 0; i < state.textToGuess.length; i++) {
        if (state.textToGuess[i] === action.guess) {
            newLettersRowText[11 - state.textToGuess.length + i] = action.guess;
        }
    }

    const gameState = newLettersRowText.includes('') ? GAME_STATE_ON : GAME_STATE_OVER;

    if (gameState === GAME_STATE_OVER) {playWinSound();}

    return Object.assign({}, state, {lettersRowText: newLettersRowText, gameState});
};


const letterMissedHandler = (state, action) => {

    const missedGuessesNext = [...state.missedGuesses, action.guess];
    let gameStateNext = GAME_STATE_ON;
    let lettersRowTextNext = state.lettersRowText;

    // If 11 misses game is over (lost). Also unhide target text (answer).
    if (missedGuessesNext.length === 11) {
        gameStateNext = GAME_STATE_OVER;
        lettersRowTextNext = formatLettersRowText(state.textToGuess);
        playLoseSound();
    }

    return Object.assign({}, state, {
        missedGuesses: missedGuessesNext,
        gameState: gameStateNext,
        lettersRowText: lettersRowTextNext
    });
}


const newGuessActionHandler = (state, action) => {

    console.log('new guess:', action.guess, action.guess.length);

    if (state.gameState !== GAME_STATE_ON || state.textToGuess.length === 0) {

        // in case game is over or not initialized ignore user guesses
        return state;
    }

    if (!action.guess.match(/^[A-Z]$/)) {

        //in case user mistakenly tries a number or interpunction or some other non alphabet character
        console.log('NOT AN ALPHABET LETTER');
        return state;
    }

    if (state.lettersRowText.includes(action.guess) || state.missedGuesses.includes(action.guess)) {
        
        console.log('ALREADY TRIED');
        return state;
    } 
    
    if (state.textToGuess.includes(action.guess)) {

        console.log('GUESSED!');
        return letterGuessedHandler(state, action);

    } else {

        console.log('MISSED!');
        return letterMissedHandler(state, action);
    
    }
};

export default newGuessActionHandler;