
import {formatLettersRowText, GAME_STATE_ON} from './guessesUtil';

const newWordReceivedHandler = (state, action) => {

    const textToGuess = action.newWord.split('');

    // Fill hidden text on screen with undefined and ''.
    // undefined is used for light-gray not needed boxes,
    // and '' for not guessable dark-gray boxes.
    const lettersRowText = formatLettersRowText(Array(textToGuess.length).fill(''));
        
    console.log('text to guess:', textToGuess);

    return Object.assign({}, state, {
        lettersRowText,
        textToGuess,
        missedGuesses: [],
        gameState: GAME_STATE_ON
    });
};

export default newWordReceivedHandler;
