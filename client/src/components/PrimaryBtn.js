import React from 'react';

/**
 * Primary Btn Props
 * 
 * onPress: () => void
 * txt:  string
 * 
 */


const PrimaryBtn = ({ onPress, txt }) => { 

    return (
        <button
            onClick={onPress}
        >
            {txt}
        </button>
    )
};

export default PrimaryBtn;