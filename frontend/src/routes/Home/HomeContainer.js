import {connect} from 'react-redux';

import {Home} from './Home';

import {fetchNewWordAndDispatchNewWordAction, NEW_GUESS} from '../../modules/guesses';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    newGuessHandler: (event) => {dispatch({type: NEW_GUESS, guess: event.key.toUpperCase()});},
    fetchNewWordAndDispatchNewWordAction: () => {dispatch(fetchNewWordAndDispatchNewWordAction());}
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export {HomeContainer};
