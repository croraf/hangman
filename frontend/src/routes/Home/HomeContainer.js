import {connect} from 'react-redux';

import {Home} from './Home';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    newGuessHandler: (event) => {dispatch({type: 'newGuess', guess: event.key.toUpperCase()});},
    newWordHandler: (newWord) => {dispatch({type: 'newWord', newWord: newWord.toUpperCase()});}
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export {HomeContainer};
