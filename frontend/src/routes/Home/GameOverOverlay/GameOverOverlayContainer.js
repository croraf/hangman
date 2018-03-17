import {connect} from 'react-redux';

import {GameOverOverlay} from './GameOverOverlay';

const mapStateToProps = (state) => ({
    isGameOver: state.guesses.isGameOver
});

const mapDispatchToProps = () => ({
    newWorldHandler: () => {console.log('new world selected');}
});

const GameOverOverlayContainer = connect(mapStateToProps, mapDispatchToProps)(GameOverOverlay);

export {GameOverOverlayContainer};
