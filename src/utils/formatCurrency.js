// Format a number as USD.
function formatCurrency(number) {
    return new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'USD' }).format(number);
  }

  export default formatCurrency;
