
/**
 * Game state constants
 */
const GAME_STATE_OVER = 'GAME_STATE_OVER';
const GAME_STATE_ON = 'GAME_STATE_ON';
const GAME_STATE_INITIALIZING = 'GAME_STATE_INITIALIZING';


const formatLettersRowText = (textToGuessShown) => {

    // Format is such that it always shows 11 elements. So word is at most 11 letters long.
    // If the word to guess is shorter it shows the empty boxes at the beggining. 
    return Array(11-textToGuessShown.length).fill(undefined).concat(textToGuessShown);
};

export {
    formatLettersRowText,
    GAME_STATE_INITIALIZING,
    GAME_STATE_ON,
    GAME_STATE_OVER
};