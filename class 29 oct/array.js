let arr =[11,14,17,19]
for(let i = 0; i<10;i++){
    let indexNumber =i+11;
    if(arr[i]-indexNumber != 0 && !arr.includes(indexNumber)){
      console.log(`${indexNumber} will on index No.  ${i}`)
    }
}