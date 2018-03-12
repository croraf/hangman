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
                {guessedText.map(letter => {
                    return (
                        <div className='lettersRowLetter'
                            key={letter}
                            style={{
                                height: '70%',
                                width: '7%',
                                borderRadius: '5%',
                                backgroundColor: '#666',
                                color: 'white',
                                fontSize: '40px',
                                fontWeight: 'bold',
                                marginLeft: '0.5%',
                                marginRight: '0.5%',
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
