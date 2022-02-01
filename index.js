// Code your solution in this file!
let scuberHQ=42

function distanceFromHqInBlocks(someValue) {
    let result = Math.abs(someValue-scuberHQ)
    return result
}

function distanceFromHqInFeet(someValue) {
    let result = distanceFromHqInBlocks(someValue)*264
    return result
}

function distanceTravelledInFeet(start,destination) {
    let result = Math.abs((start-destination)*264)
    return result
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
             return 0;
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
            return 25
    } else {
            return 'cannot travel that far';
        }
    }