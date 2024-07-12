// Problem 3: Net Salary Calculator

function calculateNetSalary(basicSalary, benefits) {
  // Constants for tax rates and deductions (actual data from provided links)
  const payeRates = [
    { from: 0, to: 24000, rate: 10.0 },
    { from: 24001, to: 32333, rate: 25.0 },
    { from: 32334, to: 500000, rate: 30.0 },
    { from: 500001, to: 800000, rate: 32.5 },
    { from: 800001, to: Infinity, rate: 35.0 }
  ];

  const nhifRates = {
    0: 150,
    6000: 300,
    12000: 400,
    18000: 500,
    24000: 600,
    30000: 750,
    35000: 950,
    40000: 1000,
    45000: 1100,
    50000: 1200,
    60000: 1300,
    70000: 1400,
    80000: 1500,
    90000: 1600,
    100000: 1700
  };

  const nssfRates = {
    0: 6,
    7000: 6,
    36000: 6
  };

  // Gross Salary
  const grossSalary = basicSalary + benefits;

  //  PAYE Tax
  let paye = calculatePAYE(basicSalary, payeRates);

  // NHIF Deductions
  let nhifDeduction = calculateNHIF(basicSalary, nhifRates);

  // NSSF Deductions
  let nssfDeduction = calculateNSSF(grossSalary, nssfRates);

  // Net Salary
  let netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;

  // Return results
  return {
    grossSalary: grossSalary,
    paye: paye,
    nhifDeduction: nhifDeduction,
    nssfDeduction: nssfDeduction,
    netSalary: netSalary
  };
}

// Function to calculate PAYE Tax
function calculatePAYE(salary, brackets) {
  let tax = 0;
  let taxableIncome = salary;

  for (let i = 0; i < brackets.length; i++) {
    if (taxableIncome > brackets[i].to) {
      tax += (brackets[i].to - brackets[i].from + 1) * (brackets[i].rate / 100);
      taxableIncome -= (brackets[i].to - brackets[i].from + 1);
    } else {
      tax += (taxableIncome - brackets[i].from + 1) * (brackets[i].rate / 100);
      break;
    }
  }

  return tax;
}

// Function to calculate NHIF Deductions
function calculateNHIF(salary, nhifRates) {
  let deduction = nhifRates[0]; // Default rate for lowest bracket

  for (let bracket in nhifRates) {
    if (salary > parseInt(bracket)) {
      deduction = nhifRates[bracket];
    }
  }

  return deduction;
}

// Function to calculate NSSF Deductions
function calculateNSSF(salary, nssfRates) {
  let deduction = nssfRates[0]; // Default rate for lowest bracket

  for (let bracket in nssfRates) {
    if (salary > parseInt(bracket)) {
      deduction = salary * (nssfRates[bracket] / 100);
    }
  }

  return deduction;
}