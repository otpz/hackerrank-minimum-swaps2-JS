function minimumSwaps(arr) {
    let copyIndex = 0; let swapCounter = 0
    let pos = 0  
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != i+1){
            copyIndex = i+1
            pos = arr.findIndex( item => item === i + 1 );
            arr[pos] = arr[i]    
            arr[i] = copyIndex  
            swapCounter += 1
        }   
    } 
    return swapCounter
}
