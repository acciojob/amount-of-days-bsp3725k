//your JS code here. If required.
function daysOfYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366; // Leap year
    } 
	else {
        return 365; // Non-leap year
    }
}

let year = prompt("Enter the to how many days in that year");
alert(daysOfYear(year));