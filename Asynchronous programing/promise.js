console.log("Starting of Day");

function carMaintenance(){
    
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Car is ready");
            resolve("Come take your car");
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

let workDone = carMaintenance();

workDone.then(function(value){
    console.log(value)
    return goForGrocery();
}).then(function (value){
    console.log(value);
   return EndOfTheDay();
}).then(function(value){
    console.log(value);})