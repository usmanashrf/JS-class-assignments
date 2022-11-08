console.log("Starting of Day");

function carMaintenance(callback){
    
    setTimeout(()=>{
        console.log("Car is ready");
        carCallback("Come take your car,");
    },2000);

}
function carCallback(value){
  console.log(value+" I'll get my car back");
  goForGrocery("Go for Grocery");
}

function groceryCallBack(value){
    console.log(value);
    EndOfTheDay();
}

function goForGrocery(value){
    console.log(value);
    groceryCallBack("Grocery is done");
}

function shopingForWinter(){
    console.log("Go winter shoping");
    console.log("Get new Jacket");
}

console.log("Handover the car to mechanic")

carMaintenance(carCallback);

shopingForWinter();

function EndOfTheDay(){
    console.log("End of Day");
}

