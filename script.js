var dateDiffInDays = function (date1, date2) {
	let time = date1.getTime() - date2.getTime();
	let days = time / (1000 * 60 * 60 * 24);
	return days;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));



