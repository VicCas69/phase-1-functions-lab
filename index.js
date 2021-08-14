function distanceFromHqInBlocks(blocks){
    if (blocks >= 42){
        return (blocks - 42);
    }
    return (42 - blocks)
}// Code your solution in this file!

function distanceFromHqInFeet(feets){
    if (feets >= 42){
        return (feets - 42) * 264;
    }
    return (42 - feets) * 264
}

function distanceTravelledInFeet(distance1, distance2){
    let result;
    distance1 >= distance2 ? result = (distance1 - distance2) * 264 : result = (distance2 - distance1) * 264;
    
    return result;
}

function calculatesFarePrice(start, destination){
    if (distanceFromHqInFeet(start,destination) <= 400){
        return  0;
    }
    else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) <= 2000){
        return (distanceTravelledInFeet(start,destination) - 400) * 0.02;
    }
    else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500){
        return 25;
    }
    else if (distanceTravelledInFeet(start, destination) >= 2500){
        return "cannot travel that far"
    }

}