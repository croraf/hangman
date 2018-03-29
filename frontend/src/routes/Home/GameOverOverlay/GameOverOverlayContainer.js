import {connect} from 'react-redux';

import {GameOverOverlay} from './GameOverOverlay';

const mapStateToProps = (state) => ({
    gameState: state.guesses.gameState
});

const mapDispatchToProps = (dispatch) => ({
    newWorldHandler: () => {
        console.log('new world selected');
        dispatch({type: 'newWord', newWord: 'metuzalem'.toUpperCase()});
    }
});

const GameOverOverlayContainer = connect(mapStateToProps, mapDispatchToProps)(GameOverOverlay);

export {GameOverOverlayContainer};
