const fs = require('fs');
// Asynchronous away
// console.log("read file");
// fs.readFile('input.txt',(err, data)=>{
//     if(err){
//         console.log(err.message)
//     }
//     console.log('data', data.toString())
//     return data;
// })
// console.log("data reading success")

// synchronous away

// console.log('read data');
// const data = fs.readFileSync('input.txt')
// console.log('data', data.toString());
// console.log('success')

// file open
const buff = new Buffer(1033)

// fs.open('input.txt','r+',(err,fd)=>{
//     if(err){
//         console.log('error in oepning file', err)
//     }
//     console.log('file open successfully')
//     fs.read(fd,buff,0,buff.length,0,(err,data)=>{
//         if(err){
//             console.log('error in reading file')
//         }
//         console.log('reading success', data.toString())
//     })
    
// })
// fs.writeFile('input.txt', 'Hello arvind',(err)=>{
//     if(err){
//         console.log('error in writing', err)
//     }else{
//     console.log('writing in success')


//     }
// })
fs.appendFile('input.txt','Hello who are you',(err)=>{
    if(err){
        console.log('err in appending file')
    }else{
        console.log('success fully ')
    }
})
fs.unlink('input.txt',(err)=>{
    if(err){

    console.log(err)
            
    }else{
        console.log('unlike success')
    }
})
