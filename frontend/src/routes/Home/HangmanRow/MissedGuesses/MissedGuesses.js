import React from 'react';


class MissedGuesses extends React.Component {
    render() {
        return (
            <div style={{width: '50%'}}>

                <div style={{
                    color: '#53555d',
                    fontFamily: 'Aller Display',
                    fontSize: '32px',
                    fontWeight: '400',
                    lineHeight: '41.02px',
                    textTransform: 'uppercase'
                }}>
                    YOU MISSED:
                </div>

                <div style={{
                    color: '#4d69fa',
                    fontFamily: 'Aller Display',
                    fontSize: '92px',
                    fontWeight: '400',
                    lineHeight: '41.02px',
                    textTransform: 'uppercase'
                }}>
                    {this.props.missedGuesses}
                </div>

            </div>
        );
    }
}

export {MissedGuesses};
