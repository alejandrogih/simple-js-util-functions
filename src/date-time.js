/*
* @param padd Boolean - Add or not a 0 to the beginning of the number.
*/
export const getWeekDays = (padd) => {
    const currentDate = new Date(); // get current date
    const first = currentDate.getDate() - currentDate.getDay() + 1; // First day is the day of the week (Monday)
    const last = first + 6; // last day (friday) is the first day + 6

    const firstday = new Date(currentDate.setDate(first)).getDate();
    const lastday = new Date(currentDate.setDate(last)).getDate();

    if (padd) {
        return `${firstday.toString().padStart(2, 0)} - ${lastday.toString().padStart(2, 0)}`;
    }

    return `${firstday} - ${lastday}`;
};