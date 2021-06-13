const fs = require('fs');
const path = require('path');
const errorHandler = require('./errorHandler');

const dbPath = path.join(__dirname, 'database.db');
const wordsPath = path.join(__dirname, 'words.db');

fs.writeFile(dbPath, JSON.stringify([]), {flag: 'wx'}, function(err) {});
fs.writeFile(wordsPath, '', {flag: 'wx'}, function(err) {});


module.exports.getAll = async function() {
    const data = await read();
    return data;
}


module.exports.add = async function({ info, description }) {
    let data = await read();
    if(!data) return false;
    try {
        data.push({ info, description });
    } catch(err) {
        errorHandler('module add()', err);
        return false;
    }    
    data = await write(data);
    if(!data) return false;
    return true;
}

module.exports.update = async function({ id, info, description }) {
    let data = await read();
    if(!data) return false;
    try {
        if(id >= data.length) throw 'Id out of data length';
        data[id] = { info, description };
    } catch(err) {
        errorHandler('module update()', err);
        return false;
    }    
    data = await write(data);
    if(!data) return false;
    return true;
}

module.exports.delete = async function({ id }) {
    let data = await read();
    if(!data) return false;
    try {
        if(id >= data.length) throw 'Id out of data length';
        data.splice(id, 1);
    } catch(err) {
        errorHandler('module delete()', err);
        return false;
    }    
    data = await write(data);
    if(!data) return false;
    return true;
}

module.exports.getWord = async function() {
    const data = await readWord();
    return data;
}

async function read() {
    try {
        const data = await fs.promises.readFile(dbPath, 'utf-8');
        return JSON.parse(data);
    } catch(err) {
        errorHandler('module read()', err);
        return false;
    }
}

async function write(data) {
    try {
        await fs.promises.writeFile(dbPath, JSON.stringify(data), 'utf-8');
        return data;
    } catch(err) {
        errorHandler('module write(data)', err);
        return false;
    }
}

async function readWord() {
    try {
        const data = await fs.promises.readFile(wordsPath, 'utf-8');
        return data.split('\n');
    } catch(err) {
        errorHandler('module readWord()', err);
        return false;
    }
}