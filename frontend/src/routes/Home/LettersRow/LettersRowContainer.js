import {connect} from 'react-redux';

import {LettersRow} from './LettersRow';

const mapStateToProps = (state) => {
    
    return ({
        lettersRowText: state.guesses.lettersRowText
    });
};

/* const mapDispatchToProps = () => {

}; */

const LettersRowContainer = connect(mapStateToProps, undefined)(LettersRow);

export {LettersRowContainer};
