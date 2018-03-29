import {connect} from 'react-redux';

import {Home} from './Home';

import {fetchNewWordAndDispatchNewWordAction} from '../../redux/reducers';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    newGuessHandler: (event) => {dispatch({type: 'newGuess', guess: event.key.toUpperCase()});},
    fetchNewWordAndDispatchNewWordAction: () => {dispatch(fetchNewWordAndDispatchNewWordAction());}
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export {HomeContainer};
