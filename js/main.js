async function displayChart() {
	const response = await fetch('./data.json')
	const data = await response.json()

	const days = data.map(a => a.day)
	const amount = data.map(b => b.amount)
	console.log(days)
	console.log(amount)
}

displayChart()
