

 
const dataPath = './data/categoryData.json' // path to our JSON file
const path = require('path');
//const directory = path.join('data', '../data/useraccount.json')
const fs = require('fs');
// util functions
const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}
const createCategory = (req, res) => {
var existCategories = getAccountData()
const newAccountId = Math.floor(100000 + Math.random() * 900000)
     const data={
      categoryName: req.body.categoryName,
     }
     
  // existAccounts.find(cat => cat.categoryName == req.body.categoryName)
       existCategories[newAccountId] = data
        console.log(existCategories);
 saveAccountData(existCategories);
    return res.send({success: true, msg: 'Category added successfully'})
       }
 

const getAllCategory = (req, res) => {
    const categories = getAccountData()
  res.send(categories)}


  
module.exports = {
   createCategory,
    getAllCategory

  };
