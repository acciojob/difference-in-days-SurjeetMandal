var dateDiffInDays = function (date1, date2) {
	let date1mm = new Date("01/01/1970 00:00:00");
	let mmdate = date1 - date2;
	return mmdate;
};


// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));







