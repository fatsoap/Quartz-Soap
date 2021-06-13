const errorHandler = require("./errorHandler");

module.exports.reqBodyChecker = function(req, res, next) {
    if(!req.body) {
        errorHandler('reqBodyChecker', 'Request Body Not Found')
        res.status(500).send('Request Body Not Found ...');
        return;
    }
    next();
}

module.exports.addIdeaChecker = function(idea) {
    let pass = true;
    try {
        if(!idea) {
            pass = false;
            throw 'Idea is undefined';
        } else if(!idea.info) {
            pass = false;
            throw 'Idea info is undefined';
        } else if(!idea.description) {
            pass = false;
            throw 'Idea description is undefined';
        }
    } catch(err) {
        errorHandler('idea add checker', err);
    }
    return pass;
}

module.exports.updateIdeaChecker = function(idea) {
    let pass = true;
    try {
        if(!idea) {
            pass = false;
            throw 'Idea is undefined';
        } else if(!idea.id) {
            pass = false;
            throw 'Idea id is undefined';
        } else if(!idea.info) {
            pass = false;
            throw 'Idea info is undefined';
        } else if(!idea.description) {
            pass = false;
            throw 'Idea description is undefined';
        }
    } catch(err) {
        errorHandler('idea update checker', err);
    }
    return pass;
}

module.exports.deleteIdeaChecker = function(idea) {
    let pass = true;
    try {
        if(!idea) {
            pass = false;
            throw 'Idea is undefined';
        } else if(!idea.id) {
            pass = false;
            throw 'Idea id is undefined';
        }
    } catch(err) {
        errorHandler('idea delete checker', err);
    }
    return pass;
}