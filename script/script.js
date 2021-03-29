//  ДЗ_Масиви_ДляШколярів

/*
// 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).


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


/*
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
document.write(`Кількість відвідувачів протягом тижня: ${numVisitorsForWeek}<br>
${numVisitorsForWeek.indexOf(numVisitorsForWeek[0]) + 1}. Понеділок: ${numVisitorsForWeek[0]} чол.<br>
${numVisitorsForWeek.indexOf(numVisitorsForWeek[1]) + 1}. Вівторок: ${numVisitorsForWeek[1]} чол.<br>
${numVisitorsForWeek.indexOf(numVisitorsForWeek[2]) + 1}. Середа: ${numVisitorsForWeek[2]} чол.<br>
${numVisitorsForWeek.indexOf(numVisitorsForWeek[3]) + 1}. Четвер: ${numVisitorsForWeek[3]} чол.<br>
${numVisitorsForWeek.indexOf(numVisitorsForWeek[4]) + 1}. Пятниця: ${numVisitorsForWeek[4]} чол.<br>
${numVisitorsForWeek.indexOf(numVisitorsForWeek[5]) + 1}. Субота: ${numVisitorsForWeek[5]} чол.<br>
${numVisitorsForWeek.indexOf(numVisitorsForWeek[6]) + 1}. Неділя: ${numVisitorsForWeek[6]} чол.<br>`)
document.write(`<br>Номери днів, коли відвідувачів було менше за 20: ${daysWithLower20Vis}<br>Номер дня, з мінімальним показником відвідування: ${numVisitorsForWeek.indexOf(minDayVisitors) + 1}<br>Номер дня, з максимальним показником відвідування: ${numVisitorsForWeek.indexOf(maxDayVisitors) + 1}<hr>Загальна кількість відвідувачів за робочі дні: ${visitorsNumForWorksDay}<br>Загальна кількість відвідувачів за вихідні дні: ${visitorsNumForHollidays}`)
*/


/*
// 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

let pupilsList = ['Іван', 'Саша', 'Оля', 'Света', 'Міша', 'Юра', 'Маряна', 'Іван', 'Оля', 'Руслан', 'Коля', 'Саша', 'Іван', 'Іван', 'Коля', 'Наталя', 'Бодя', 'Сергій', 'Міша', 'Юра', 'Іван',]
let count = 0
for (i = 0; i < pupilsList.length; i++) {
	if (pupilsList[i] == 'Іван') count++
}
document.write(`Список учнів: ${pupilsList}.<br>В класі ${count} учнів з іменем <i>"Іван"</i>.`)
*/


/*
// 4. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

let lottery = []
let win = 0
let userChoice
alert(`ЛОТЕРЕЯ!\n20 номерів з випадковим виграшов до 500 грн, або програшов до -500 грн.`)
for (i = 0; i < 20; i++) {
	lottery[i] = -500 + Math.floor(Math.random() * 1001)
}

function checkFunc(num) {
	if (num === parseInt(num)) {
		if (num > 0) {
			alert(`Вітаємо!\nВи поповнили свій виграш на ${num} грн.!`)
		} else if (num === 0) {
			alert(`Упс, номер виявився порожнім.`)
		} else {
			alert(`Невдача :(\nВи зменшили свій виграш на ${num} грн.)`)
		}
		win += num
	} else {
		alert('Ви вже відкривали виграш за цим номером!')
	}
}

do {
	alert(`Номера:${lottery}`)
	userChoice = parseInt(prompt(`Дано 20 номерів.\nВкажіть номер від 1-20 для відкриття виграшу.\nвведіть номер 21 щоб забрати виграш.\nВаша суму виграшу становить на даний момент: ${win} грн.`))
	switch (userChoice) {
		case 1: checkFunc(lottery[0])
			delete lottery[0]
			break;
		case 2: checkFunc(lottery[1])
			delete lottery[1]
			break;
		case 3: checkFunc(lottery[2])
			delete lottery[2]
			break;
		case 4: checkFunc(lottery[3])
			delete lottery[3]
			break;
		case 5: checkFunc(lottery[4])
			delete lottery[4]
			break;
		case 6: checkFunc(lottery[5])
			delete lottery[5]
			break;
		case 7: checkFunc(lottery[6])
			delete lottery[6]
			break;
		case 8: checkFunc(lottery[7])
			delete lottery[7]
			break;
		case 9: checkFunc(lottery[8])
			delete lottery[8]
			break;
		case 10: checkFunc(lottery[9])
			delete lottery[9]
			break;
		case 11: checkFunc(lottery[10])
			delete lottery[10]
			break;
		case 12: checkFunc(lottery[11])
			delete lottery[11]
			break;
		case 13: checkFunc(lottery[12])
			delete lottery[12]
			break;
		case 14: checkFunc(lottery[13])
			delete lottery[13]
			break;
		case 15: checkFunc(lottery[14])
			delete lottery[14]
			break;
		case 16: checkFunc(lottery[15])
			delete lottery[15]
			break;
		case 17: checkFunc(lottery[16])
			delete lottery[16]
			break;
		case 18: checkFunc(lottery[17])
			delete lottery[17]
			break;
		case 19: checkFunc(lottery[18])
			delete lottery[18]
			break;
		case 20: checkFunc(lottery[19])
			delete lottery[19]
			break;
		case 21: document.write(`Ваш виграш становить ${win} грн.`)
			break;
		default: alert('ви ввели не правильний номер!')
	}
} while (userChoice != 21)
*/