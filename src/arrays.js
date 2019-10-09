/* 
 * @param arr array - The array to group.
 * @param property string - The object propperty to group by.
 */

export const groupBy = function (arr, property) {
    const filtered = arr.reduce(function(item, x) {
        if (!item[x[property]]) { item[x[property]] = []; }
        item[x[property]].push(x);
        return item;
    }, []);

        const temp = {};
        Object.keys(filtered).forEach(i => temp[i] = filtered[i]);

        return temp;
}

/* 
 * @param obj Object - The object to create an array from.
 */
export const objectToArray = (obj) => {
    const tempArray = [];

    Object.keys(obj).forEach((i) => tempArray.push(obj[i]));

    return tempArray;
}
