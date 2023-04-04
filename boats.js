const people = [3, 2,2,1];
const limit = 3;

function boat(people, limit) {
    let numberOfBoats = 0;
    people.reduce((prev,curr) => {
        if(prev + curr <= limit) {
            numberOfBoats++
        }
    })
    return numberOfBoats;
}

console.log(boat(people, limit))