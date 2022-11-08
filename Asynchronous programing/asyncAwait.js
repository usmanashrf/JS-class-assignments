
console.log("day start");

function carMaintenance(){

    let promise = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            console.log("Car is ready");
        resolve("Take your car");
        },2000)
});
return promise;
}

function goForGrocery(){

    let promise = new Promise((resolve,reject)=>{
        console.log("Grocery is done");
        resolve("let's go for shopping");
    })
    return promise;
}

function shopingForWinter(){

    let promise = new Promise((resolve, reject)=>{
        console.log("Get my Jacket");
        resolve("Let's go home")
    });

 return promise;
}
function EndOfTheDay(){
    console.log("day end");
}


async function StartDay(){
    let carStatus = await carMaintenance();
    console.log(carStatus);
    let groceryStatus = await goForGrocery();
    console.log(groceryStatus);
    let shopingStatus = await shopingForWinter();
    console.log(shopingStatus);
    EndOfTheDay();
}

StartDay();




// let dayTasks = carMaintenance().then(
//     function (value){
//     console.log(value);
//     return goForGrocery();
//     }).then(
//         function(value){
//             console.log(value);
//             return shopingForWinter(value);
//         }).then( 
//             function(value){
//                 console.log(value)
//                 return EndOfTheDay();
//             });