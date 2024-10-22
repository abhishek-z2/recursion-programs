// let num=8;

// function fibonacci(num){
//     let arr=[]
//     let i = 0
//     let j=0,k=1
//     while(i<num){
//        arr.push(j)
      

//         let temp = k;
//         k = k+j
//         j = temp
//         i++
//     }
//    return arr
// }

// console.log(fibonacci(num))


function recursivefib(num){
    
   if(num==0||num==1){
    return num
   }
    else 
        return recursivefib(num-1)+recursivefib(num-2)
}


// console.log(recursivefib(num))

function printFib(num){
    let arr = []
    for(let i = 0; i < num; i++){
        arr.push(recursivefib(i))
    }
    return arr
}

console.log(printFib(20))