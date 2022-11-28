 function mul(number){
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve(2*number)
    },3000));
 }
 function bar(number){
    return new Promise((resolve,reject)=>setTimeout(()=>{
        reject(2*number+"this is rejected")
    },3000));
 }
 mul(12)
 .then((data)=>{
    console.log(data);
    return mul(data);
 }).then((data1)=>{
    console.log(data1);
    return bar(data1);
 }).then((data2)=>console.log(data2)).catch((error)=>console.log(error));