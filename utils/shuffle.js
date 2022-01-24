module.exports = (arr) => {
    let curIndex = arr.length;
    let randIndex;

    while(curIndex != 0){
        randIndex = Math.floor(Math.random() * --curIndex);

        [arr[curIndex], arr[randIndex]] = [arr[randIndex], arr[curIndex]];
    }

    return arr;
}