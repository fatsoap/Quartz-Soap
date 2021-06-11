const errorHandler = require('./errorHandler');
const helper = require('./helper');
const db = require('./module_fs');


module.exports.getAll = async function (req, res, next) {
    const data = await db.getAll();
    if(!data) {
        res.status(400).send('DataBase Error ... ');
    } else {
        res.status(200).send(data);
    }
}

module.exports.getIdea = async function (req, res, next) {
    if(Number(req.params.amount) >= 1) {
        const data = await db.getAll();
        try {
            const newData = getRandomAmount(Number(req.params.amount), data);
            res.status(200).send(newData);
        } catch(err) {
            errorHandler('getIdea controller #20', err);
            res.status(400).send(err);
        }        
    } else {
        errorHandler('getIdea controller #20', 'Amount Params Parse Error ...');
        res.status(500).send('Amount Params Parse Error ... ');
    }
}

module.exports.postIdea = async function (req, res, next) {
    if(!req.body.method) {
        errorHandler('postIdea controller #21', 'Empty method ...');
        res.status(500).send('Unknown method ...');
    } else if(req.body.method === 'CREATE') {
        await addIdea(req, res, next);
    } else if(req.body.method === 'UPDATE') {
        await updateIdea(req, res, next);
    } else if(req.body.method === 'DELETE') {
        await deleteIdea(req, res, next);
    } else {
        errorHandler('postIdea controller #51', 'Unknown method ...');
        res.status(500).send('Unknown Method ...');
    }
}

module.exports.getWord = async function (req, res, next) {
    if(Number(req.params.amount) >= 1) {
        const data = await db.getWord();
        try {
            const newData = getRandomAmount(Number(req.params.amount), data);
            res.status(200).send(newData);
        } catch(err) {
            errorHandler('getWord controller #20', err);
            res.status(400).send(err);
        }        
    } else {
        errorHandler('getWord controller #20', 'Amount Params Parse Error ...');
        res.status(500).send('Amount Params Parse Error ... ');
    }
}


async function addIdea(req, res, next) {
    if(!helper.addIdeaChecker(req.body.idea)) {
        res.status(500).send('Unknown Idea ...');
        return;
    }
    const success = await db.add(req.body.idea);
    if(success) {
        res.status(200).send('Add Idea Success !');
    } else {
        res.status(400).send('Add Idea Fail ...');
    }
}

async function updateIdea(req, res, next) {
    if(!helper.updateIdeaChecker(req.body.idea)) {
        res.status(500).send('Unknown Idea ...');
        return;
    }
    const success = await db.update(req.body.idea);
    if(success) {
        res.status(200).send('Update Idea Success !');
    } else {
        res.status(400).send('Update Idea Fail ...');
    }
}

async function deleteIdea(req, res, next) {
    if(!helper.deleteIdeaChecker(req.body.idea)) {
        res.status(500).send('Unknown Idea ...');
        return;
    }
    const success = await db.delete(req.body.idea);
    if(success) {
        res.status(200).send('Delete Idea Success !');
    } else {
        res.status(400).send('Delete Idea Fail ...');
    }

}

function getRandomAmount(amount, data) {
    let count = Math.min(amount, data.length);
    data.sort((a,b) => Math.random() < Math.random() ? 1 : -1);
    const newData = data.splice(0, count);    
    return newData;
}

