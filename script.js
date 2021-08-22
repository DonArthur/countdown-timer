const newYear = '1 Jan 2022'

function countDown() {
    const endDate = new Date(newYear)
    const currentDate = new Date()
    const days = Math.floor((endDate - currentDate) / 1000 / 3600 / 24)
    const hours = Math.floor(23 - currentDate.getHours())
    const minutes = Math.floor(59 - currentDate.getMinutes())
    const seconds = Math.floor(60 - currentDate.getSeconds())
    const daysElement = document.getElementById('days')
    const hoursElement = document.getElementById('hours')
    const minutesElement = document.getElementById('minutes')
    const secondsElement = document.getElementById('seconds')
    daysElement.innerHTML = days
    hoursElement.innerHTML = hours < 10 ? '0' + hours : hours
    minutesElement.innerHTML = minutes < 10 ? '0' + minutes : minutes
    secondsElement.innerHTML = seconds < 10 ? '0' + seconds : seconds
}

setInterval(countDown, 1000)

// countDown()