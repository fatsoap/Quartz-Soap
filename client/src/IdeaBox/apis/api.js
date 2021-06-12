import axios from 'axios';

const idea_url = 'http://localhost:3001/api/idea/';

export const getAll = function() {
    axios.get(`${idea_url}`).then(({ data }) => {
        return data;
    }).catch((err) => {
        return undefined;
    })
}