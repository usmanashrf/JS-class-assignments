console.log("Starting of Day");

function carMaintenance(key){
    
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(key){
                console.log("Car is ready");
            resolve("Come take your car");
            }
            else{
                reject("Key is not match")
            }
            
        },2000);
    })
   return promise;
}

function goForGrocery(){

    let promise = new Promise(function(resolve, reject){
        resolve("Grocery is done");
    })
    return promise;

}
function EndOfTheDay(){
   let promise = new Promise(function(resolve, reject){
    resolve("End of Day");
   });
   return promise;
}

let workDone = carMaintenance(false);

workDone.then(function(value){
    console.log(value)
    return goForGrocery();
}).then(function (value){
    console.log(value);
   return EndOfTheDay();
}).then(function(value){
    console.log(value);})
    .catch(function(value){
        console.log(value)
    })
    