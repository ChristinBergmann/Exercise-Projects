const getSleepHours = day => {

    switch (day) {
        case "monday":
            return 8
            break;
        case "tuesday":
            return 3
            break;
        case "wednesday":
            return 7
            break;
        case "thursday":
            return 7
            break;
        case "friday":
            return 7
            break;
        case "saturday":
            return 9
            break;
        case "sunday":
            return 9
            break;
    }
}
//console.log(getSleepHours("monday"))

const getActualSleepHours = () =>
    /*getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");*/

    //---or like this:
    8 + 3 + 7 + 7 + 7 + 9 + 9;

console.log(getActualSleepHours());

//const getIdealSleepHours = () => {
//const idealHours = 9;
//return idealHours *7;
// }
//getIdealSleepHours();
//console.log(getIdealSleepHours());


//---or like this:
const getIdealSleepHours = idealHours =>
    idealHours * 7;

const calculateSleepDept = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);

    actualSleepHours === idealSleepHours ? console.log("You´ve got the right amount of sleep!") :

        actualSleepHours >= idealSleepHours ?
        console.log("YAY, you´ve got " + (actualSleepHours - idealSleepHours) + " hour(s) more sleep this week!") : console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
}
calculateSleepDept();