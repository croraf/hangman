import {connect} from 'react-redux';

import {LettersRow} from './LettersRow';

const mapStateToProps = (state) => {
    
    return ({
        guessedText: state.guesses.guessedText
    });
};

/* const mapDispatchToProps = () => {

}; */

const LettersRowContainer = connect(mapStateToProps, undefined)(LettersRow);

export {LettersRowContainer};
