const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const hoursElement = document.getElementById("hours");
const daysElement = document.getElementById("days");

const countDown = () => {
	const currentDate = new Date();
	const endDate = new Date("May 4, 2022 09:00:00");

	const remainingTimeInSeconds = (endDate - currentDate) / 1000;

	const seconds = Math.floor(remainingTimeInSeconds % 60);
	const minutes = Math.floor((remainingTimeInSeconds / 60) % 60);
	const hours = Math.floor((remainingTimeInSeconds / 3600) % 24);
	const days = Math.floor(remainingTimeInSeconds / 3600 / 24);

	secondsElement.innerText = seconds;
	minutesElement.innerText = minutes;
	hoursElement.innerText = hours;
	daysElement.innerText = days;
};

setInterval(countDown, 1000);
