function findSpareChairs(rooms, need) {
    let chairsTaken = [];
    let totalChairsNeeded = need;
    
    for (let room of rooms) {
        let occupants = room[0].split('X').length - 1;
        let chairsAvailable = room[1] - occupants;
        
        if (chairsAvailable >= totalChairsNeeded) {
            chairsTaken.push(totalChairsNeeded);
            return chairsTaken;
        } else if (chairsAvailable > 0) {
            chairsTaken.push(chairsAvailable);
            totalChairsNeeded -= chairsAvailable;
        } else {
            chairsTaken.push(0);
        }
    }
    
    if (totalChairsNeeded === 0) {
        return chairsTaken;
    } else {
        return 0;
    }
}

let rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
let need = 4;
console.log(findSpareChairs(rooms, need)); // Output: [0, 1, 3]
