export function findNeighbors(targetKey,targetValue,arr) {
    let prev, next, isLast;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][targetKey] === targetValue) {
            // 如果是第一項，前一個為最後一項；否則為前一項
            prev = i === 0 ? arr[arr.length - 1] : arr[i - 1];

            // 如果是最後一項，下一個為第一項；否則為下一項
            next = i === arr.length - 1 ? arr[0] : arr[i + 1];

            isLast = i === arr.length - 1

            break;
        }
    }
    if (!prev || !next) {
        throw new Error("soundName not found in the array");
    }
    return {prev, next, isLast};
}