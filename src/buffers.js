// in memory data
// raw data

let buffer = Buffer.alloc(6);
console.log('buffer', buffer);

let buffer2 = Buffer.from([1, 2, 3]);
console.log('buffer', buffer2);

let buffer3 = Buffer.from('Hello');
console.log('buffer', buffer3);

// // positions
const abc = Buffer.alloc(26);
console.log('abc', abc);

// // data to data, byte to byte
for (let index = 0; index < abc.length; index++) {
	abc[index] = index !== 5 ? index + 97 : '';
}

console.log('abc', abc.toString());
