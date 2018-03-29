import {connect} from 'react-redux';

import {GameOverOverlay} from './GameOverOverlay';

import {fetchNewWordAndDispatchNewWordAction} from '../../../modules/guesses';

const mapStateToProps = (state) => ({
    gameState: state.guesses.gameState
});

const mapDispatchToProps = (dispatch) => ({
    newWorldHandler: () => {
        console.log('new world selected');
        dispatch(fetchNewWordAndDispatchNewWordAction());
    }
});

const GameOverOverlayContainer = connect(mapStateToProps, mapDispatchToProps)(GameOverOverlay);

export {GameOverOverlayContainer};
