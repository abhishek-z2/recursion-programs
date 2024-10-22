function mergesort(arr){
    if(arr.length<=1)
        return arr
    const middleIndex = Math.floor(arr.length/2)
    
    const leftArr = arr.slice(0,middleIndex)
    const rightArr = arr.slice(middleIndex)

    const sortedLeft = mergesort(leftArr)
    const sortedRight = mergesort(rightArr)

    return merge(sortedLeft,sortedRight)
}

function merge(left,right){
    let resultantArray = []
    let leftIndex  = 0
    let rightIndex = 0

    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            resultantArray.push(left[leftIndex])
            leftIndex++
        } else {
            resultantArray.push(right[rightIndex])
            rightIndex++
        } 
    }
    return resultantArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex))
}

const array = [38,27,43,3,9,82,10]
console.log(mergesort(array))