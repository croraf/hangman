import React from 'react';


class NewWorld extends React.Component {
    render() {
        return (
            <div 
                style={{
                    boxSizing: 'border-box',
                    width: '349px',
                    height: '109px',
                    borderRadius: '48px 48px 49px',
                    border: '4px dashed #ffba00',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '50px',
                    cursor: 'pointer',
                }}
                onClick={this.props.newWorldHandler}
            >
                <div style={{
                    color: '#ffba00',
                    fontFamily: 'Aller Display',
                    fontSize: '32px',
                    fontWeight: '400',
                    lineHeight: '41.02px',
                    textTransform: 'uppercase'
                }}>
                    New world
                </div>
            </div>
        );
    }
}

export {NewWorld};
