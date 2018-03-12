
import { store } from '../redux/store';

const calculateAllowedDirectionFromState = (incomingDirection, currentChar) => {

    let left = true; 
    let right = true; 
    let top = true; 
    let bottom = true;

    // console.log('Incoming direction:', incomingDirection);

    if (currentChar === '|' || currentChar === '-' ) {
        // if it is | or - then all other directions but incoming are denyed
        if (incomingDirection !== 'left') {left = false;}
        if (incomingDirection !== 'right') {right = false;}
        if (incomingDirection !== 'top') {top = false;}
        if (incomingDirection !== 'bottom') {bottom = false;}
    } else {
        // if it is +, letter or @ then only the returning direction is denyed
        // for @ there is no incomingDirection so none is denyed
        if (incomingDirection === 'left') {right = false;}
        if (incomingDirection === 'right') {left = false;}
        if (incomingDirection === 'top') {bottom = false;}
        if (incomingDirection === 'bottom') {top = false;}
    }

    return {
        left,
        right,
        top,
        bottom
    };
};

const findNextPosition = (rows, currentX, currentY, incomingDirection) => {

    let nextX;
    let nextY;
    let nextDirection;

    
    const currentChar = rows[currentY].charAt(currentX);

    // console.log('Current char:', currentChar);
    
    // Dispatch path update
    store.dispatch({
        type: 'solutionUpdate',
        solution: {location: [currentX, currentY], currentChar}
    });

    if (currentChar === 'x') {
        store.dispatch({type: 'solvingStopped'});
        return;
    }

    // allowed from current token and incoming direction
    let allowedDirectionFromState = 
            calculateAllowedDirectionFromState(incomingDirection, currentChar);


    if (allowedDirectionFromState.right && currentX < rows[currentY].length - 1) {
        // right
        const rightChar = rows[currentY].charAt(currentX + 1);
        if (rightChar !== ' ') {
            nextX = currentX + 1;
            nextY = currentY;
            nextDirection = 'right';
        }
    }

    if (allowedDirectionFromState.left && currentX > 0) {
        // left
        const leftChar = rows[currentY].charAt(currentX - 1);
        if (leftChar !== ' ') {
            nextX = currentX - 1;
            nextY = currentY;
            nextDirection = 'left';
        }
    }

    if (allowedDirectionFromState.bottom && currentY < rows.length - 1) {
        // bottom
        const bottomChar = rows[currentY + 1].charAt(currentX);
        // check for '' is necesary as rows can have different lengths
        if (bottomChar !== ' ' && bottomChar !== '') {
            nextX = currentX;
            nextY = currentY + 1;
            nextDirection = 'bottom';
        }
    }

    if (allowedDirectionFromState.top && currentY > 0) {
        // check top
        const topChar = rows[currentY - 1].charAt(currentX);
        // check for '' is necesary as rows can have different lengths
        if (topChar !== ' ' && topChar !== '') {
            nextX = currentX;
            nextY = currentY - 1;
            nextDirection = 'top';
        }
    }

    // if nextDirection has not been found the path is broken
    if (typeof nextDirection === 'undefined') {

        store.dispatch({
            type: 'solutionError',
            errorMessage: '<Path broken>'
        });

        store.dispatch({type: 'solvingStopped'});
        return;
    }

    setTimeout(
        () => {
            findNextPosition(rows, nextX, nextY, nextDirection);
        },
        180
    );
};

const calculatePath = (map) => {

    store.dispatch({type: 'clearSolution'});

    const rows = map.split(/\r?\n/);

    let currentX;
    let currentY;

    let calculatedPath;
    
    rows.forEach((row, index) => {
        const xFound = row.search('@');
        if (xFound !== -1) {
            currentX = xFound;
            currentY = index;
        }
    });

    console.log(rows);

    if (typeof currentX !== 'undefined' && typeof currentY !== 'undefined') {

        findNextPosition(rows, currentX, currentY, undefined);
    } else {
        store.dispatch({
            type: 'solutionUpdate',
            solution: {location: [], currentChar: '<No initial position given>'}
        });
        store.dispatch({type: 'solvingStopped'});
    }

    return calculatedPath;
};


export {calculatePath};
