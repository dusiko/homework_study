

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

let listName = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(s) {
	return s.split(';').map(val => val.split(':').join(', ').toUpperCase()).reduce((ress, val) => {
		ress += '(' + val + ')'
		return ress
	}, '')
}

console.log(meeting(listName))