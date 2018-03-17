import React from 'react';


class LettersRow extends React.Component {
    render() {

        const {guessedText} = this.props; 

        return (
            <div style={{
                height: '20%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                {guessedText.map((letter, index) => {

                    const opacity = letter === undefined ? 0.3 : 0.98;

                    return (
                        <div className='lettersRowLetter'
                            key={index}
                            style={{
                                height: '140px',
                                width: '125px',
                                borderRadius: '10px',
                                backgroundColor: '#50525a',
                                opacity: opacity,
                                color: 'white',
                                fontFamily: 'Aller Display',
                                fontSize: '76px',
                                fontWeight: '400',
                                lineHeight: '41.02px',
                                textTransform: 'uppercase',
                                marginLeft: '5px',
                                marginRight: '5px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: 'none'
                            }}
                        >
                            {letter}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export {LettersRow};
