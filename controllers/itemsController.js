/* 
const dataPath = './data/itemData.json' // path to our JSON file
const path = require('path');
const fs = require('fs');
//  functions
const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}
const getAll = (req, res) => {
    const items = getAccountData()
  res.send(items)}


module.exports = {
   
    getAll
  };
 */