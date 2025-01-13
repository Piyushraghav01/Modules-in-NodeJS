// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome to node js')
// })

// server.listen(3100, () =>{
//     console.log('Server is listen')
// })

// npm i nodemon 
// nodemon server.js
// Globle instralling in NPM
// npm i -g nodemon
// sudo npm i -g nodemon
// npm start , npm init
// npm i nodemon
// npm i -D nodemon
// npm i mongodb

// Understanding Package.json
// Removing mjs module. "type": "module"
// Understanding nvm.


// const readline = require('readline');

// const interface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// interface.question("Enter First Nums", (num1)=>{
//     interface.question("Enter Second nums", (num2)=> {
//         const server = Number(num1) + Number(num2);
//         console.log(server);
//     })
// })

// const fs = require('fs');

// console.log('Welcome to file system module')

// const buffer = fs.readFileSync('dat.text',{encoding: 'utf8'});
// console.log(buffer);

// console.log("Welcome to node js");

// const fs = require('fs');

// const buffer = fs.readFileSync('dat.text', {encoding: 'utf8'})
// console.log(buffer)

// try{
// fs.writeFileSync('employment.txt', 'Name: Jone Deo, Age: 30, Position: SYSY');
// }catch(err){
//     console.log(err);
// }

// fs.appendFileSync('employment.txt', 'Name: eiiei, Age: 48, jdjdjjdj');

// try{
//     fs.unlinkSync('employment.txt')
// }catch(err){
//     console.log('File not work')
// }

// console.log('Welcome to my App')

// const fs = require('fs');

// fs.readFile('data.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString());
//     }
// })

// fs.writeFile('empoylment.txt', 'New Posyys', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('fjjjfjjf')
//     }
// })

// fs.appendFile('employee.txt', '\n Another Employee', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('File is updated')
//   }
// })
// console.log('This is another operation')

// const fs = require('fs');

// fs.readFile('data.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString());
//     }
// })

// fs.writeFile('employmet.txt', 'New Employment',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('dhh dhhh')
//     }
// })

// fs.appendFile('empieiej.txt', '\n Anothorir ieieee', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('dsd dddd')
//     }
// })

// fs.unlink('data.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('deleting')
//     }
// })
// console.log('hfhhf hfhfhh hfh hhff')