const daysColumns = document.querySelectorAll('.chart__col--data')
const daysName = document.querySelectorAll('.chart__col--day')
const popupText = document.querySelectorAll('.popup')
const currentDay = new Date().getDay()

async function displayChart() {
	const response = await fetch('./data.json')
	const data = await response.json()
	const days = data.map(a => a.day)
	const amount = data.map(b => b.amount)

	daysName.forEach((day, index) => {
		day.textContent = days[index]
	})

	daysColumns.forEach((col, param) => {
		col.style.height = `${amount[param] * 2.2}px`
	})

	popupText.forEach((pop, value) => {
		pop.textContent = `$${amount[value]}`
	})

	switch (new Date().getDay()) {
		case 0:
			daysColumns.forEach(col => {
				col.classList.remove('active')
			})
			daysColumns[6].classList.add('active')
			break
		case 1:
			daysColumns.forEach(col => {
				col.classList.remove('active')
			})
			daysColumns[0].classList.add('active')
			break
		case 2:
			daysColumns.forEach(col => {
				col.classList.remove('active')
			})
			daysColumns[1].classList.add('active')
			break
		case 3:
			daysColumns.forEach(col => {
				col.classList.remove('active')
			})
			daysColumns[2].classList.add('active')
			break
		case 4:
			daysColumns.forEach(col => {
				col.classList.remove('active')
			})
			daysColumns[3].classList.add('active')
			break
		case 5:
			daysColumns.forEach(col => {
				col.classList.remove('active')
			})
			daysColumns[4].classList.add('active')
			break
		case 6:
			daysColumns.forEach(col => {
				col.classList.remove('active')
			})
			daysColumns[5].classList.add('active')
			break
	}
}
displayChart()
