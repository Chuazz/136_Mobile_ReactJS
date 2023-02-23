function addCommasForThounsand(number, currency = "đ") {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + currency;
}

export default addCommasForThounsand;
