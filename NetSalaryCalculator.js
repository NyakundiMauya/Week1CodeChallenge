// var MonthlyTaxablePay = 0;
// var PAYE = 0;
// var NHIF = 0;
// var NSSF = 0;
//function NetSalary(MonthlyTaxablePay){

function NHIF(MonthlyTaxablePay) {
    let NDeduction = 0;
    if (MonthlyTaxablePay > 100000) {
        return NDeduction = 1700;
    } else if (MonthlyTaxablePay >= 90000 && MonthlyTaxablePay <= 99999) {
        return NDeduction = 1600;
    } else if (MonthlyTaxablePay >= 80000 && MonthlyTaxablePay <= 89999) {
        return NDeduction = 1500;
    } else if (MonthlyTaxablePay >= 70000 && MonthlyTaxablePay <= 79999) {
        return NDeduction = 1400;
    } else if (MonthlyTaxablePay >= 60000 && MonthlyTaxablePay <= 69999) {
        return NDeduction = 1300;
    } else if (MonthlyTaxablePay >= 50000 && MonthlyTaxablePay <= 59999) {
        return NDeduction = 1200;
    } else if (MonthlyTaxablePay >= 45000 && MonthlyTaxablePay <= 49999) {
        return NDeduction = 1100;
    } else if (MonthlyTaxablePay >= 40000 && MonthlyTaxablePay <= 44999) {
        return NDeduction = 1000;
    } else if (MonthlyTaxablePay >= 35000 && MonthlyTaxablePay <= 39999) {
        return NDeduction = 950;
    } else if (MonthlyTaxablePay >= 30000 && MonthlyTaxablePay <= 34999) {
        return NDeduction = 900;
    } else if (MonthlyTaxablePay >= 25000 && MonthlyTaxablePay <= 29999) {
        return NDeduction = 850;
    } else if (MonthlyTaxablePay >= 20000 && MonthlyTaxablePay <= 24999) {
        return NDeduction = 750;
    } else if (MonthlyTaxablePay >= 15000 && MonthlyTaxablePay <= 19999) {
        return NDeduction = 600;
    } else if (MonthlyTaxablePay >= 12000 && MonthlyTaxablePay <= 14999) {
        return NDeduction = 500;
    } else if (MonthlyTaxablePay >= 8000 && MonthlyTaxablePay <= 11999) {
        return NDeduction = 400;
    } else if (MonthlyTaxablePay >= 6000 && MonthlyTaxablePay <= 7999) {
        return NDeduction = 300;
    } else {
        return NDeduction = 300;
    }
}
function PAYE(MonthlyTaxablePay) {
    let PDeduction = 0;
    if (MonthlyTaxablePay > 32333) {
        return PDeduction = MonthlyTaxablePay * 0.3;
    } else if (MonthlyTaxablePay > 24000 && MonthlyTaxablePay <= 32333) {
        return PDeduction = MonthlyTaxablePay * 2.5;
    } else if (MonthlyTaxablePay <= 24000){
        return PDeduction = MonthlyTaxablePay * 0.1;
}
}
function NSSF(MonthlyTaxablePay) {
    let NsDeduction = 0;
    if (MonthlyTaxablePay > 6000) {
        return NsDeduction = 400;
    } else {
        return 0;
    }
}
function NetSalary(MonthlyTaxablePay) {



    Deductions = PAYE(MonthlyTaxablePay) + NHIF(MonthlyTaxablePay) + NSSF(MonthlyTaxablePay);


    return NetSalary = `Your Net Salary: ` + (MonthlyTaxablePay - Deductions);
}
// return NetSalary = `Your Net Salary: ` + MonthlyTaxablePay - Deductions;