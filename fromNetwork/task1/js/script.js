

/*
add("123", "321"); -> "444"
add("11", "99");   -> "110"
*/


/*
var addOne = add(1);
addOne(3); // 4
*/

/*
function sortVowels(s) {
	const Vowels = ['a', 'e', 'i', 'o', 'u', 'y']
	if (typeof s !== 'string')
		return ''
	else {
		return s.split('').reduce((acc, val, i, arr) => {
			if (i === arr.length - 1)
				acc += val + '|'
			else if (Vowels.some(val2 => val.toLowerCase() === val2) === false)
				acc += val + '|\n'
			else
				acc += '|' + val + '\n'
			return acc
		}, '')
	}
}
console.log(typeof 'lol')
console.log(sortVowels("Rnd Te5T"))



*/


function diffBig2(arr) {
	return arr.sort((a, b) => b - a)[0] - arr.sort((a, b) => b - a)[1]
}

console.log(diffBig2([4, 2, 6, 2, 3]))