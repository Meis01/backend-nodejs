

 
const dataPath = './data/useraccount.json' // path to our JSON file
const path = require('path');
//const directory = path.join('data', '../data/useraccount.json')
const fs = require('fs');
const { userInfo } = require('os');
// util functions
const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    data = JSON.parse(jsonData)
    return    data
}
const createUser = (req, res) => {
var data = getAccountData()
const newAccountId = Math.floor(100000 + Math.random() * 900000)
const username= req.body.username
const email= req.body.email
const password= req.body.password
const password_confirmation = req.body.password_confirmation
console.log(username, email, password,password_confirmation )
    /*   if(req.body.password != req.body.password_confirmation)
       {return res.send({success: false, msg: 'passwords ar not the same!!!'})} */
      /*   else {existAccounts[newAccountId] = data */
 data.push( {
  id:newAccountId,
  username,email, password
 })
 saveAccountData([...data])

    return res.send({success: true, msg: 'account added successfully',data: data[data.length-1]})
  }

const getUser = (req, res) => {
    var data = getAccountData()
  
    //const accountId = req.params['id'];
   // existAccounts[accountId] = req.body;
   // const newAccountId = Math.floor(100000 + Math.random() * 900000)
    const username= req.body.username
    //const email= req.body.email
    const password= req.body.password
    const user = data.find(user=> user.username == username && user.password == password)
    console.log(user)
    if(!user) 
     {
       return res.send({success: false, msg: 'username or password is wrong!!'})}
      else{ res.send({success: true, msg: 'account added successfully',user})}
       
  }

  const deleteUser = (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        var data = getAccountData()
        const userId = req.params['id'];
        delete data.spl[userId]; 
        saveAccountData([...data]);
        res.send(`accounts with id ${userId} has been deleted`)
      }, true);
  }

  const updateUser = (req,res) => {
    var existAccounts = getAccountData()
  fs.readFile(dataPath, 'utf8', (err, data) => {
    const accountId = req.params['id'];
    existAccounts[accountId] = req.body;
    saveAccountData(existAccounts);
    res.send(`accounts with id ${accountId} has been updated`)
  }, true);
  }
module.exports = {
    createUser,
    getUser,
    deleteUser,
    updateUser
  };
