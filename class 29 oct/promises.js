
let promise1 = new Promise((resolve, reject) =>{
 setTimeout(()=> resolve(1),2000);
})



let promise2 = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve(2),2000);
   })

   Promise.all([promise1]).then((res)=> console.log(res));
