export const DELIVERY_FEE = 50;
export const SHIPPING_ADDRESS = 'Garapur, Kendrapara, Odisha, 754211'

export const formattedDate = (date) => {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    return date.toLocaleString('en-GB', options).replace(',', '').toLowerCase();
}