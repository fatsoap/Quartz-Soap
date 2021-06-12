import React from 'react';

import TopBar from  './components/TopBar';
import Edit from './components/Edit';
import Generate from './components/Generate';
import History from './components/History';


const IdeaBox = ({ match }) => {

    const nowTab = match.params.tab;

    return (
        <div>
            <TopBar />
            {nowTab === 'edit' ? <Edit /> : null}
            {nowTab === 'generate' ? <Generate /> : null}
            {nowTab === 'history' ? <History /> : null}
        </div>
    )
}

export default IdeaBox;