function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
    future_value = typeof future_value !== 'undefined' ? future_value : 0;
    type = typeof type !== 'undefined' ? type : 0;

  if(rate_per_period != 0.0){
    // Interest rate exists
    var q = Math.pow(1 + rate_per_period, number_of_payments);
    return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));

  } else if(number_of_payments != 0.0){
    // No interest rate, but number of payments exists
    return -(future_value + present_value) / number_of_payments;
  }

  return 0;
}

function IPMT(rate, period, periods, present, future, type) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Initialize type
  var type = (typeof type === 'undefined') ? 0 : type;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Compute payment
  var payment = pmt(rate, periods, present, future, type);
  
  // Compute interest
  var interest;
  if (period === 1) {
    if (type === 1) {
      interest = 0;
    } else {
      interest = -present;
    }
  } else {
    if (type === 1) {
      interest = FV(rate, period - 2, payment, present, 1) - payment;
    } else {
      interest = FV(rate, period - 1, payment, present, 0);
    }
  }
  
  // Return interest
  return interest * rate;
}