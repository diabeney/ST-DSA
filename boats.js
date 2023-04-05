const people = [3,2,2,1];
const limit = 3;

function boat(people, limit) {
    let numberOfBoats = 0;
    for(let i = 0;i<people.length;i++) {
        let curr = people[i]; 
        let pointer = i + 1;
        if(curr === limit) {
            numberOfBoats++;
            continue;
        } else if(curr < limit){
            numberOfBoats++;
            while(pointer < people.length) {
                console.log(pointer)
                let next = people[pointer];
                if(next + curr <= limit) numberOfBoats++;
                pointer++
            }
        } else continue;
    }
    // return numberOfBoats;
}
console.time('dsa');
console.log(boat(people, limit));
console.timeEnd('dsa')