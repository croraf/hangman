
import winSound from './win1.wav';
const winAudioPlayer = new Audio(winSound);
winAudioPlayer.volume = 0.07;

import loseSound from './lose1.wav';
const loseAudioPlayer = new Audio(loseSound);
loseAudioPlayer.volume = 0.07;

const playWinSound = () => {
    winAudioPlayer.play();
};

const playLoseSound = () => {
    loseAudioPlayer.play();
};

export {
    playWinSound,
    playLoseSound
};