/*
1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
*/
let lessonsNum = parseInt(prompt('вкажіть кількість предметів?'))
let massMark = []
for (i = 0; i < lessonsNum; i++) {
	massMark[i] = parseInt(prompt(`Вкажіть оцінки з ${lessonsNum} предметів.\nОцінка за ${i + 1} предмет: `))
} console.log(massMark)
let sum = 0
let kategory
let minMark = massMark[0]
let serArif
for (i = 0; i < massMark.length; i++) {
	sum += massMark[i]
	if (minMark > massMark[i]) minMark = massMark[i]
} console.log(minMark)
serArif = sum / massMark.length
if (minMark < 12) {
	kategory = "Відмінник"
} if (minMark < 10) {
	kategory = "Ударник"
} if (minMark < 8) {
	kategory = "Трієшник"
} if (minMark < 5) {
	kategory = "Двійошник"
}
document.write(`Список оцінок: ${massMark}<br>Середнє арфметичне з всіх оцінок: ${serArif};<br>Учень відноситься до категорії: ${kategory}`)