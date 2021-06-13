import React from 'react';

import { allBar } from '../helpers/const';
import  SideBarBtn from  '../components/SideBarBtn';

/**
 * SideBar Props
 * 
 * 
 */

const SideBar = () => {

    return(
        <div className="side-bar__box">
            {allBar.map((bar, i) => {
                return(
                    <div key={i}>
                        <SideBarBtn bar={bar}/>
                    </div>
                )
            })}
        </div>
    )
}

export default SideBar;