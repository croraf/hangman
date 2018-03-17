import {connect} from 'react-redux';

import {Home} from './Home';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    newGuessHandler: (event) => {dispatch({type: 'newGuess', guess: event.key});},
    newWordHandler: (newWord) => {dispatch({type: 'newWord', newWord});}
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export {HomeContainer};
