function binRota(arr){
    let result = [];
    let currentTick = 0;
    for (let i = 0; i < arr.length; i++) {
            if (currentTick % 2 == 0) {
        result.push(...arr[currentTick])
    }
    else{
        let oppoRes = arr[currentTick].reverse();
        result.push(...arr[oppoRes])
    }
    currentTick++;
    }
    return result;

}