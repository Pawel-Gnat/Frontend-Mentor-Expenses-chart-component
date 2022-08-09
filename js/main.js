const daysColumns = document.querySelectorAll('.chart__col--data')
const daysName = document.querySelectorAll('.chart__col--day')
const popupText = document.querySelectorAll('.popup')

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
}

displayChart()
