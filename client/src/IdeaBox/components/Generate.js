import React, { useState, useEffect } from 'react';
import PrimaryBtn from '../../components/PrimaryBtn';

import { getAll } from '../apis/api';
import IdeaRow from './IdeaRow';

const Generate  = () => {
    const [ideaList, setIdeaList] = useState([]);
    const [selectList, setSelectList] = useState([]);

    useEffect(() => {
        refresh();
    }, []);

    async function refresh() {
        const allIdea = await getAll();
        setIdeaList(allIdea);
    }

    return(
        <div className='ideaBox__main'>
            <header>
                <h1>產生點子</h1>
            </header>
            <main>
            {ideaList.map((idea, i) => {
                return(
                    <IdeaRow key={i} idea={idea} />
                )
            })}
            </main>
            <PrimaryBtn 
                onPress={() => {console.log('wasd')}}
                txt={selectList.length === 0 ? '產生' : '刪除' }
            />
        </div>
    )
}

export default Generate;