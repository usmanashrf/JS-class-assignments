//console.log("First");

setTimeout(function(){
    console.log("First");
},2000);

function displayData(id){

    console.log(id);
}

function fecthData(id, callback){

    callback(id);
}

fecthData(1234,displayData);









// function prnt(){

//     setTimeout(function(){
//         console.log("Hello")
//    return{
//     name:"abc"
//    };
//     },2000);
// }
// var data = prnt()
// console.log(data);
// console.log("second")