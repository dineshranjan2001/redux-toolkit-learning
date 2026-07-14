const currentDate = new Date();

export const generateOrderID = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return `${currentYear}${currentMonth}${randomNumber}`;
}