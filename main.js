//Datatype : [Array]


let names = ['amira' , 'khaled', 'ahmed', 'saad'];
console.log(names);
console.log(names[0]);
console.log(names.length);
console.log(names.length-1);
console.log(names[names.length-1])

let tryingArrays = [1, 2, 3, 'amira', undefined, null, [1, 2, 3]];
console.log(tryingArrays);

let objects = [1, 2, 3, [4, 5, 6]]
console.log(objects[3]);
//if i want to extract 3 inside the nested array. How acn i do that?
console.log(objects[3][1]);
//the previous code meant: enter index 3, and grab index 1 from it

//an array inside another inside a third one:
let nestedObjects = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(nestedObjects);
console.log(nestedObjects[3][3][2]);

//How to change/modify data inside the array
let namesAgain = ['amira', 'khaled', 'ahmed', 'saad'];
namesAgain[1] = 'engineer';
console.log(namesAgain[1]);
