//  ДЗ_Масиви_ДляШколярів


// 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).


/*

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

*/

// 2.Дано масив, який зберігає кількість відвідувачів магазину протягом тижня.Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів на вихідних.

let numVisitorsForWeek = []
let daysWithLower20Vis = []
let maxDayVisitors
let minDayVisitors
let visitorsNumForWorksDay = 0
let visitorsNumForHollidays = 0
for (i = 0; i < 7; i++) {
	numVisitorsForWeek[i] = 1 + Math.floor(Math.random() * 50)
	if (numVisitorsForWeek[i] < 20) {
		daysWithLower20Vis.push(i + 1)
	}
	if (i < 5) {
		visitorsNumForWorksDay += numVisitorsForWeek[i]
	} else {
		visitorsNumForHollidays += numVisitorsForWeek[i]
	}
}
minDayVisitors = Math.min(...numVisitorsForWeek);
maxDayVisitors = Math.max(...numVisitorsForWeek);
document.write(`Кількість відвідувачів протягом тижня: ${numVisitorsForWeek}.<br>Номери днів, коли відвідувачів було менше за 20: ${daysWithLower20Vis}<br>Номер дня, з мінімальним показником відвідування: ${numVisitorsForWeek.indexOf(minDayVisitors) + 1}<br>Номер дня, з максимальним показником відвідування: ${numVisitorsForWeek.indexOf(maxDayVisitors) + 1}<hr>Загальна кількість відвідувачів за робочі дні: ${visitorsNumForWorksDay}<br>Загальна кількість відвідувачів за вихідні дні: ${visitorsNumForHollidays}`)
