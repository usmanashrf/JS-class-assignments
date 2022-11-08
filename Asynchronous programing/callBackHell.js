console.log("Starting of Day");

function carMaintenance(callback){
    
    setTimeout(()=>{
        console.log("Car is ready");
        callback("Come and get your car");
    },2000);

}
function goForGrocery(callback){
    callback("Grocery is done");
}
function shopingForWinter(){
    console.log("Go winter shoping");
    console.log("Get new Jacket");
}

console.log("Handover the car to mechanic")

carMaintenance(function(value){
    console.log("I'll get my car back");
    goForGrocery(function (){
        console.log("Grocery is done");
        EndOfTheDay(function(){
            console.log("End of Day");
        });
    });
  });



shopingForWinter();
function EndOfTheDay(callBack){
    callBack("End of Day");
}

