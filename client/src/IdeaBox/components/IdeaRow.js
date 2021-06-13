import React from 'react';

const IdeaRow = ({ key, idea}) => {
    return(
        <div key={key} className="ideaRow" style={styles.row}>
            <h1 style={styles.title}>
                {idea.info}
            </h1>
            <h2 style={styles.sub}>
                {idea.description}
            </h2>
        </div>
    )
}


const styles={
    row: {
        width: '90%',
        height: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '8px',
        marginTop: '15px',
        border: '1px solid  #A5A5A5',
    },
    title: {
        width: '150px',
        fontSize: 18,
        color: '#000000',
    },
    sub: {
        width: 'calc(100% - 150px)',
        height: '18px',
        fontSize: 16,
        color: '#000000',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'left',
        borderLeft: '1px solid #8f2cffd5',
        paddingLeft: '10px',
    }

}

export default IdeaRow;