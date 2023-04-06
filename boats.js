const people = [3,2,2,1];
const limit = 3;

// function boat(people, limit){
//     let numberOfBoats = 0;
//     for(let i = 0;i<people.length;i++) {
//         let pointer = i + 1;
//         let curr = people[i];
//         let next = people[pointer];
//         if(curr === limit) {
//             numberOfBoats++;
//             continue;
//         }
//         while(pointer < people.length && i !== people.length - 1) {
//             // console.log(`i = ${i}: pointer = ${pointer}`)
//             if(curr + next <= limit) numberOfBoats++;
//             if(curr === limit || curr < limit) numberOfBoats++;
//             pointer++;
//         }
//     }
//     return numberOfBoats;
// }

function boats(people, limit) {
    for(let i = 0,j = i+1; i < people.length; i++, j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
console.time('dsa');
console.log(boats(people, limit));
console.timeEnd('dsa')