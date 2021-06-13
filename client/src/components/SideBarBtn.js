import React from 'react';
import { useHistory } from 'react-router-dom';

const SideBarBtn = ({ bar }) => {
    const history = useHistory();

    function goTo() {
        history.push(`/${bar.loc}`);
    }
    return(
        <button style={btn} onClick={goTo}>
            {bar.title}
        </button>
    )
}

const btn =  {
    width: '100px', 
    fontSize: 16, 
    color: '#FFFFFF', 
    backgroundColor: '#FFFFFF00',
    border: 0,
    textAlign: 'left',
    marginTop: '15px',
};


export default  SideBarBtn;