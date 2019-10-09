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

/*
 @param dmy boolean - true is want output date in dd/mm/yyyy format
 */
export const currentDate = (dmy = false) => {
    const current_datetime = new Date();
    if (dmy) {
      return `${current_datetime.getDate().toString().padStart(2, 0)}/${(current_datetime.getMonth() + 1).toString().padStart(2, 0)}/${current_datetime.getFullYear()}`;
    }
  
    return `${(current_datetime.getMonth() + 1).toString().padStart(2, 0)}/${current_datetime.getDate().toString().padStart(2, 0)}/${current_datetime.getFullYear()}`;
}
    
/* 
 @param date string - The date to check.
 */
export const isTodayOrFuture = (date) => new Date(date) >= new Date(currentDay());

/* 
 @param arr Array - An array of dates to sort
 */
export const sortByDate = (arr) => arr.sort((a, b) => new Date(a.date) - new Date(b.date));

/* 
 @param arr Array - An array of dates to sort
 */
export const sortByTime = (arr) => arr.sort((a, b) => new Date(`${a.date} ${a.hour}`) - new Date(`${b.date} ${b.hour}`));