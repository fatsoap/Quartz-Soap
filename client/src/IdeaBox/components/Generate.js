import React, { useState, useEffect } from 'react';
import PrimaryBtn from '../../components/PrimaryBtn';

import { getAll, getRandom, getSome } from '../apis/api';
import IdeaRow from './IdeaRow';

const Generate  = () => {
    const [ideaList, setIdeaList] = useState([]);
    const [randoList, setRandoList] = useState([]);
    const [selectList, setSelectList] = useState([]);

    useEffect(() => {
        refresh();
    }, []);

    async function refresh() {
        //const allIdea = await getAll();
        //setIdeaList(allIdea);
    }

    async function _generate() {
        let ideas = await getSome();
        let rando = randoList;
        if(rando.length === 0) {
            rando = await getRandom();
        }
        ideas = [...ideaList, ...ideas, ...rando.splice(0,3)];
        setRandoList(rando);
        setIdeaList(ideas);

    }

    function _delete() {
        let newList = [];
        ideaList.forEach((l, i) => {
            if( selectList.findIndex(s => s === i) === -1) {
                newList.push(ideaList[i]);
            }
        });
        setIdeaList(newList);
        setSelectList([]);
        return;
    }

    function selectIdeaList(i) {
        let isSelect = selectList.findIndex(s => s === i);
        let oldList = selectList;
        if(isSelect !== -1) { //found
            oldList.splice(isSelect, 1);
            setSelectList([...oldList]);
        } else {
            setSelectList([...oldList, i]);
        }
        return;
    }

    return(
        <div className='ideaBox__main'>
            <header>
                <h1>產生點子</h1>
            </header>
            <main>
            {ideaList.map((idea, i) => {
                const isSelect = selectList.findIndex(sl => sl === i) !== -1;
                return(
                    <div 
                      key={i} 
                      style={{width: '100%',display: 'flex',
                        justifyContent: 'center', alignItems: 'center',}}
                      onClick={()=>selectIdeaList(i)}>
                    <IdeaRow isSelect={isSelect} idea={idea} />
                    </div>
                )
            })}
            </main>
            <PrimaryBtn 
                onPress={selectList.length === 0 ?
                    () => _generate() : () => _delete()}
                txt={selectList.length === 0 ? '產生' : '刪除' }
            />
        </div>
    )
}

export default Generate;