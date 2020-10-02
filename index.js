function bruteForceTwoSum(array, sum){
    let sums = [];

    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum){
                sums.push([array[i], array[j]])
            }
        }
    }
    return sums
}