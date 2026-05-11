let returnDate = (date) => {
    date = new Date(date);
    const day = date.getUTCDate().toString().padStart(2, '0');
    // Months are 0-indexed, so add 1
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    // Get the last two digits of the year
    const year = date.getUTCFullYear().toString().slice(-2);
    // 3. Format the date as dd-mm-yy
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
}

export default returnDate;