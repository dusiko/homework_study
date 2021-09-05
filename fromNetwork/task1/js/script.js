/*
Напишите однострочное решение, которое вычисляет
сумму квадратных корней для всех чётных
чисел целочисленного массива.
*/
const someArr = [11, 5, 9, 2, 36, 3, 4]

const ress = someArr.filter(val => (val % 2 == 0)).reduceRight((acc, val2) => acc + Math.sqrt(val2), 0)

console.log(ress)
